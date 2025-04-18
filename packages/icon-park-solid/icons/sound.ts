import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSoundIcon],svg[icon-park-solid-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="40" x="8" y="4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:circle cx="24" cy="15" r="5" fill="currentColor" stroke="currentColor" stroke-width="4"></svg:circle><svg:circle cx="14" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="14" cy="38" r="2" fill="currentColor"></svg:circle><svg:circle cx="34" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="34" cy="38" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="32" r="6" fill="currentColor" stroke="currentColor" stroke-width="4"></svg:circle></svg:g>`,
})
export class IconParkSolidSoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
