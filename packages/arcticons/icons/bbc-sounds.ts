import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBbcSoundsIcon],svg[arcticons-bbc-sounds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.69 6.059H42.5v35.883H23.69zm-11.299 5.587H23.69v24.708H12.391zM5.5 16.55h6.891v14.899H5.5z"></svg:path>`,
})
export class ArcticonsBbcSoundsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
