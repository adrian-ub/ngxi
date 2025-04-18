import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSoundtrapIcon],svg[arcticons-soundtrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.429 24h21.142M10.786 10.588S5.5 16.595 5.5 24s5.286 13.413 5.286 13.413m26.428-26.825S42.5 16.595 42.5 24s-5.286 13.413-5.286 13.413"></svg:path>`,
})
export class ArcticonsSoundtrapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
