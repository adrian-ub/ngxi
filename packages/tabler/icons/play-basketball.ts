import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlayBasketballIcon],svg[tabler-play-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0M5 21l3-3l.75-1.5M14 21v-4l-4-3l.5-6"></svg:path><svg:path d="m5 12l1-3l4.5-1l3.5 3l4 1"></svg:path><svg:path fill="currentColor" d="M18.5 16a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class TablerPlayBasketballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
