import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBabyOneIcon],svg[icon-park-solid-baby-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:circle cx="24" cy="8" r="5" fill="currentColor" stroke-linejoin="round"></svg:circle><svg:path d="M5 28s17-20.25 38 0"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" d="M19 28v-3.79S19 19 24 19s5 5.21 5 5.21V32s0 5-5 5s-5-5-5-5z"></svg:path><svg:path stroke-linejoin="round" d="m29 32l8 5l-6 7M19 32l-8 5l6 7"></svg:path></svg:g>`,
})
export class IconParkSolidBabyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
