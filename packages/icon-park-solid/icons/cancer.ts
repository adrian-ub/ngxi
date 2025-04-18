import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCancerIcon],svg[icon-park-solid-cancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="37" cy="17" r="6" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 13s6-8 16-8s16 6 16 6"></svg:path><svg:circle cx="11" cy="31" r="6" fill="currentColor" transform="rotate(-180 11 31)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 35s-6 8-16 8s-16-6-16-6"></svg:path></svg:g>`,
})
export class IconParkSolidCancerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
