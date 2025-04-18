import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHomeHeartIcon],svg[tabler-home-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m21 12l-9-9l-9 9h2v7a2 2 0 0 0 2 2h6"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.39 0 .754.112 1.061.304M19 21.5l2.518-2.58a1.74 1.74 0 0 0 0-2.413a1.627 1.627 0 0 0-2.346 0l-.168.172l-.168-.172a1.627 1.627 0 0 0-2.346 0a1.74 1.74 0 0 0 0 2.412l2.51 2.59z"></svg:path></svg:g>`,
})
export class TablerHomeHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
