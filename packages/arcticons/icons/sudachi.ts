import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSudachiIcon],svg[arcticons-sudachi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.5 33.25a13.875 13.875 0 0 1 0-27.75zm3-18.5c7.663 0 13.875 6.212 13.875 13.875S33.163 42.5 25.5 42.5z"></svg:path>`,
})
export class ArcticonsSudachiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
