import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHomeEmpty24FilledIcon],svg[fluent-home-empty-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.55 2.533a2.25 2.25 0 0 1 2.9 0l6.75 5.694c.508.428.8 1.057.8 1.72v8.803A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V9.947c0-.663.292-1.292.8-1.72z"></svg:path>`,
})
export class FluentHomeEmpty24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
