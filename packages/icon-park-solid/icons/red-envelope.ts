import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRedEnvelopeIcon],svg[icon-park-solid-red-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M39 4H9v6l15 4l15-4z"></svg:path><svg:path d="M39 17v27H9V17"></svg:path><svg:path d="m19 19l5 6l5-6M18 31h12m-12-6h12m-6 0v12"></svg:path></svg:g>`,
})
export class IconParkSolidRedEnvelopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
