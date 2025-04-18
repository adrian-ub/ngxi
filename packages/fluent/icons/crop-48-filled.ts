import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCrop48FilledIcon],svg[fluent-crop-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5.5a1.5 1.5 0 0 0-3 0V11H5.5a1.5 1.5 0 0 0 0 3H11v16.25A6.75 6.75 0 0 0 17.75 37H34v5.5a1.5 1.5 0 0 0 3 0V37h5.5a1.5 1.5 0 0 0 0-3H17.75A3.75 3.75 0 0 1 14 30.25zm20 12.25V32h3V17.75A6.75 6.75 0 0 0 30.25 11H16v3h14.25A3.75 3.75 0 0 1 34 17.75"></svg:path>`,
})
export class FluentCrop48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
