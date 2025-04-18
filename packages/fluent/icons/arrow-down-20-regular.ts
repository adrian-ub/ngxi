import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDown20RegularIcon],svg[fluent-arrow-down-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.867 10.837a.5.5 0 1 0-.739-.674l-5.63 6.168V2.5a.5.5 0 0 0-1 0v13.828l-5.629-6.165a.5.5 0 0 0-.738.674l6.314 6.916a.747.747 0 0 0 1.108 0z"></svg:path>`,
})
export class FluentArrowDown20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
