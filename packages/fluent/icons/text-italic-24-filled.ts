import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextItalic24FilledIcon],svg[fluent-text-italic-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.649 18.5h3.847a1 1 0 0 1 0 2h-9.5a.997.997 0 0 1-.996-1c0-.552.445-1 .996-1h3.51L13.332 6H9.997a1 1 0 0 1 0-2H18.5a1 1 0 0 1 0 2h-3.025z"></svg:path>`,
})
export class FluentTextItalic24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
