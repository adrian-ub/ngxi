import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SectionIcon],svg[fluent-mdl2-section-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1620 576q23 0 46 8t44 23t37 34t24 42l277 789H0l278-789q8-22 23-41t36-34t43-23t48-9zM428 704q-3 0-7 2t-10 6t-8 6t-5 7l-217 619h1686l-217-619q-1-3-4-6t-9-7t-9-5t-8-3z"></svg:path>`,
})
export class FluentMdl2SectionIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
