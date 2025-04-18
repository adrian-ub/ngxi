import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsVolumeOffIcon],svg[zondicons-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 8.59l-2.12-2.13l-1.42 1.42L13.6 10l-2.13 2.12l1.42 1.42L15 11.4l2.12 2.13l1.42-1.42L16.4 10l2.13-2.12l-1.42-1.42L15 8.6zM4 7H0v6h4l5 5V2z"></svg:path>`,
})
export class ZondiconsVolumeOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
