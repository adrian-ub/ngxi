import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsDevicesIcon],svg[akar-icons-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 15H4V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M2 18h12"></svg:path><svg:path d="M14 9.2c0-.663.597-1.2 1.333-1.2h5.334C21.403 8 22 8.537 22 9.2v9.6c0 .663-.597 1.2-1.333 1.2h-5.334C14.597 20 14 19.463 14 18.8zm4 7.8h.01"></svg:path></svg:g>`,
})
export class AkarIconsDevicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
