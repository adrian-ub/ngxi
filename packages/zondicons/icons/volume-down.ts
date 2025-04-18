import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsVolumeDownIcon],svg[zondicons-volume-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7H3v6h4l5 5V2zm8.54 6.54l-1.42-1.42a3 3 0 0 0 0-4.24l1.42-1.42a4.98 4.98 0 0 1 0 7.08"></svg:path>`,
})
export class ZondiconsVolumeDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
