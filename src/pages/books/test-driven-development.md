---
layout: ../../layouts/BookLayout.astro
title: "Test-Driven Development: By Example"
author: "Kent Beck"
publishDate: "2025-07-07"
tags: ["software development", "testing", "tdd", "best practices", "agile"]
coverImage: "https://m.media-amazon.com/images/I/81xR8QshZfL.jpg"
link: "https://www.amazon.se/-/en/Kent-Beck/dp/0321146530"
rating: 3
summary: "A foundational book that introduces the practice of Test-Driven Development through practical examples. While the methodology has merit, the strict adherence to TDD can feel cumbersome in practice, though it offers valuable insights for improving testing practices."
---

## Key Takeaways

"Test-Driven Development: By Example" is the definitive guide to TDD, written by the methodology's creator. While the book uses Java and Python examples, the principles translate well to my DevOps work with Python automation scripts, infrastructure testing, and CI/CD pipeline validation.

### The Red-Green-Refactor Cycle

The core TDD cycle is simple:

1. **Red**: Write a failing test
2. **Green**: Write the minimum code to make it pass
3. **Refactor**: Improve the code while keeping tests green

This cycle forces you to think about requirements upfront and creates a safety net for changes. In my infrastructure automation work, this has been invaluable:

```python
# Test first - what should our deployment script do?
def test_deploy_application():
    # Red: This will fail initially
    result = deploy_application("staging", "v1.2.3")
    assert result.success == True
    assert result.deployed_version == "v1.2.3"
    assert result.environment == "staging"

# Then implement the minimum to make it pass
def deploy_application(env, version):
    # Green: Minimal implementation
    return DeployResult(success=True, deployed_version=version, environment=env)
```

### The Two Rules of TDD

Beck outlines two fundamental rules:

1. **Write new code only if an automated test has failed**
2. **Eliminate duplication**

These rules may seem simple but have big implications. The first rule ensures you never write unnecessary code, while the second drives good design through refactoring.

### Test-Driven Development Patterns

The book introduces several key patterns:

**Test First**: Always write the test before the code. This forces you to think from the client's perspective.

**Assert First**: Start by writing the assertion, then work backwards to set up the test.

**Test Data**: Use simple, obvious data in tests to make failures easy to understand.

**Evident Data**: Make the relationship between test input and expected output obvious.

## The Money Example Walkthrough

Beck's detailed walkthrough of implementing a multi-currency money class is clear and make the concept easy to understand and to follow the process. He shows how TDD drives design decisions naturally. Starting with the simplest possible test:

```java
public void testMultiplication() {
    Dollar five = new Dollar(5);
    assertEquals(new Dollar(10), five.times(2));
    assertEquals(new Dollar(15), five.times(3));
}
```

This simple test drives the creation of the entire Money framework. The progression from this basic test to a full multi-currency system demonstrates how TDD naturally leads to good object-oriented design.

## Critical Assessment

While Beck's book is well-written and the examples are clear, I find myself skeptical about strict TDD adherence in practice. The methodology contains valuable insights, but the rigid approach feels unnecessarily constraining.

**What I appreciate:**
- The emphasis on thinking about requirements upfront
- The focus on creating comprehensive test suites
- The insight that tests can drive better design
- The safety net that tests provide when refactoring

**Where I struggle with TDD:**
- The development cycle feels artificially slow and cumbersome
- Writing failing tests first often feels like busy work
- The strict rules can impede natural problem-solving flow
- Real-world development rarely fits the neat red-green-refactor cycle
- Exploratory coding and prototyping become unnecessarily difficult

**My compromise approach:**
Rather than following TDD religiously, I've adopted a more pragmatic testing strategy:
- Write tests for critical business logic and complex algorithms
- Test infrastructure automation thoroughly (where failures are expensive)
- Use test-first for bug fixes and when requirements are well-understood
- Allow exploratory coding without tests, then add tests once the approach is proven
- Focus on high-value tests rather than achieving 100% coverage

In DevOps contexts, this hybrid approach works well because:
- The cost of production bugs is high enough to justify comprehensive testing
- But the exploratory nature of debugging and troubleshooting doesn't fit TDD's constraints

## Testing Infrastructure Code

One challenge in DevOps is testing infrastructure code that interacts with external systems. Beck's principles still apply, but require adaptation:

```python
# Use dependency injection for testability
class CloudResourceManager:
    def __init__(self, cloud_provider):
        self.provider = cloud_provider

    def create_instance(self, instance_config):
        # Business logic here
        return self.provider.launch_instance(instance_config)

# Test with mock provider
def test_create_instance():
    mock_provider = MockCloudProvider()
    manager = CloudResourceManager(mock_provider)

    config = InstanceConfig(size="D2ds-v4", image="ubuntu-24")
    instance = manager.create_instance(config)

    assert instance.size == "D2ds-v4"
    assert instance.image == "ubuntu-24"
    assert mock_provider.launch_instance_called
```

## Lessons for CI/CD

TDD has improved our CI/CD pipelines significantly:

1. **Pipeline steps are functions** that can be tested independently
2. **Rollback procedures** are more reliable when developed using TDD
3. **Infrastructure changes** are less risky with comprehensive test coverage

## Additional Resources

- [Growing Object-Oriented Software, Guided by Tests](https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627) by Steve Freeman and Nat Pryce
- [Effective Unit Testing](https://www.amazon.com/Effective-Unit-Testing-guide-developers/dp/1935182579) by Lasse Koskela
- [Python Testing 101](https://pytest-with-eric.com/introduction/python-testing-strategy/) for Python-specific testing guidance

This book fundamentally changed how I think about testing, even though I don't practice pure TDD. Beck's insights about the relationship between tests and design are valuable, and the book has definitely increased the amount of unit testing I include in my work. However, I've found that a more flexible approach to testing, one that emphasizes pragmatic test coverage over strict test-first methodology, works better for the realities of DevOps and infrastructure development.

For developers new to testing, this book provides essential concepts and demonstrates the value of comprehensive test suites. Just don't feel compelled to follow every rule to the letter, extract the principles that work for your context and development style.
