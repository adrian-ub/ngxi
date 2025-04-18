import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCube12FilledIcon],svg[fluent-cube-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.449 1.105a1.5 1.5 0 0 1 1.102 0l3.5 1.384A1.5 1.5 0 0 1 11 3.884v4.23a1.5 1.5 0 0 1-.949 1.395l-3.5 1.384a1.5 1.5 0 0 1-1.102 0l-3.5-1.384A1.5 1.5 0 0 1 1 8.114v-4.23a1.5 1.5 0 0 1 .949-1.395zm-1.763 2.93a.5.5 0 1 0-.372.93l2.186.874V8a.5.5 0 0 0 1 0V5.839l2.186-.875a.5.5 0 1 0-.372-.928L6 4.96z"></svg:path>`,
})
export class FluentCube12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
