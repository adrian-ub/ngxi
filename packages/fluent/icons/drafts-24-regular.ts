import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDrafts24RegularIcon],svg[fluent-drafts-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.878 2.826l.153.144l.145.153a3.58 3.58 0 0 1-.145 4.908L9.063 19.999a2.25 2.25 0 0 1-1 .58l-5.115 1.395a.75.75 0 0 1-.92-.921l1.394-5.116a2.25 2.25 0 0 1 .58-.999L15.97 2.97a3.58 3.58 0 0 1 4.908-.144M15.001 6.06l-9.938 9.938a.75.75 0 0 0-.193.333l-1.05 3.85l3.85-1.05a.75.75 0 0 0 .332-.194L17.94 9zM6.526 11l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5zm4-4l-1.5 1.5H2.75a.75.75 0 1 1 0-1.5zm6.505-2.97l-.97.97L19 7.94l.97-.97a2.078 2.078 0 1 0-2.939-2.94M14.526 3l-1.5 1.5H2.75a.75.75 0 1 1 0-1.5z"></svg:path>`,
})
export class FluentDrafts24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
