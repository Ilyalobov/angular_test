import { TypeCheckCompiler } from '@angular/compiler/src/view_compiler/type_check_compiler';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LogClickDirective } from './log-click.directive';

@Component({
  template: `<div appLogClick (changes)="output = $event"></div>`
})
export class TestContainerComponent {
  public output: number;
}

describe('LogClickDirective', () => {
  let container, fixture;

  beforeEach(()=> {
                    TestBed.configureTestingModule({
                      declarations:[TestContainerComponent, LogClickDirective]
                    });

                    fixture = TestBed.createComponent(TestContainerComponent);
                    container = fixture.componentInstance;
                  });

  it('should create an instance', () => {
    const directive = new LogClickDirective();
    expect(directive).toBeTruthy();
  });

  it('should create an instance', () => {
    const div=fixture.nativeElement.querySelector('div');
    div.click();
    expect(container.output).toBe(1);
  });
});
