import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageMultiple24FilledIcon],svg[fluent-image-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h9a3.25 3.25 0 0 1 3.25 3.25v9c0 .646-.189 1.249-.514 1.755l-5.692-5.376a2.25 2.25 0 0 0-3.09 0l-5.69 5.375A3.24 3.24 0 0 1 3 15.25zm10.747 2.746a1.248 1.248 0 1 0 0-2.496a1.248 1.248 0 0 0 0 2.496m-2.483 3.724l5.642 5.327a3.24 3.24 0 0 1-1.656.453h-9a3.24 3.24 0 0 1-1.656-.453l5.64-5.327a.75.75 0 0 1 1.03 0M8.75 21a3.25 3.25 0 0 1-2.74-1.5h9.74a3.75 3.75 0 0 0 3.75-3.75V6.011a3.25 3.25 0 0 1 1.5 2.74v7a5.25 5.25 0 0 1-5.25 5.25z"></svg:path>`,
})
export class FluentImageMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
