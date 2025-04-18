import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TestCaseIcon],svg[fluent-mdl2-test-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1001 1536H0V0h1536v768h-128V128H128v1280h937zm962 327q14 28 14 57q0 26-10 49t-27 41t-41 28t-50 10h-754q-26 0-49-10t-41-27t-28-41t-10-50q0-29 14-57l299-598v-241h-128V896h640v128h-128v241zm-242-199l-185-369v-271h-128v271l-185 369zM576 998l627-627l90 90l-717 717l-333-333l90-90z"></svg:path>`,
})
export class FluentMdl2TestCaseIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
