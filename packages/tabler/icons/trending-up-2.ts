import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTrendingUp2Icon],svg[tabler-trending-up-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m18 5l3 3l-3 3"></svg:path><svg:path d="M3 18h5l7-10h6"></svg:path></svg:g>`,
})
export class TablerTrendingUp2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
