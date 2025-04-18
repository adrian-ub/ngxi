import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHeadphoneMuteIcon],svg[mage-headphone-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.518 20.537a2.63 2.63 0 0 1-.768-1.866v-2.604a2.644 2.644 0 0 1 5.239 0m7.982 2.604a2.645 2.645 0 0 0 5.279 0v-2.604a2.644 2.644 0 0 0-5.279 0z"></svg:path><svg:path d="M2.75 18.671v-6.595A9.23 9.23 0 0 1 18.506 5.55m1.746 2.305a9.34 9.34 0 0 1 .998 4.22v6.596M3 21.056L20.96 3.095"></svg:path></svg:g>`,
})
export class MageHeadphoneMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
