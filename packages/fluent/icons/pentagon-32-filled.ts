import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPentagon32FilledIcon],svg[fluent-pentagon-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.91 2.602a3.25 3.25 0 0 0-3.82 0L3.847 10.043a3.25 3.25 0 0 0-1.18 3.634l3.911 12.04a3.25 3.25 0 0 0 3.091 2.246h12.66a3.25 3.25 0 0 0 3.09-2.246l3.912-12.04a3.25 3.25 0 0 0-1.18-3.634z"></svg:path>`,
})
export class FluentPentagon32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
