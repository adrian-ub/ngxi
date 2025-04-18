import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWifi420FilledIcon],svg[fluent-wifi-4-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.922 13.881a1.242 1.242 0 1 1-1.757 1.757a1.242 1.242 0 0 1 1.757-1.757"></svg:path>`,
})
export class FluentWifi420FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
