import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineExternalTransmissionIcon],svg[icon-park-outline-external-transmission-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 25h12m-6-6l6 6l-6 6M21 6v20c0 6.74-6.165 13.567-12 16"></svg:path><svg:path d="M42 14V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-3.5"></svg:path></svg:g>`,
})
export class IconParkOutlineExternalTransmissionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
