import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBitrueIcon],svg[arcticons-bitrue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29 40.613l11.887-6.863v-19.5M7.113 20.024V33.75L24 43.5m11.887-32.137L24 4.5L7.113 14.25"></svg:path><svg:circle cx="24" cy="27.239" r="6.95" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.05 14.916v12.323"></svg:path>`,
})
export class ArcticonsBitrueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
