import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTrendingUp3Icon],svg[tabler-trending-up-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m18 5l3 3l-3 3"></svg:path><svg:path d="M3 18h2.397a5 5 0 0 0 4.096-2.133l4.014-5.734A5 5 0 0 1 17.603 8H21"></svg:path></svg:g>`,
})
export class TablerTrendingUp3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
