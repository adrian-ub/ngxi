import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandRedditIcon],svg[tabler-brand-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 8c2.648 0 5.028.826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59-4.03 6.5-9 6.5c-4.875 0-8.845-2.8-9-6.294l-1-.206a2.5 2.5 0 0 1 2.326-4.36C5.973 8.827 8.353 8 11.001 8zm0 0l1-5l6 1"></svg:path><svg:path d="M18 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:circle cx="9" cy="13" r=".5" fill="currentColor"></svg:circle><svg:circle cx="15" cy="13" r=".5" fill="currentColor"></svg:circle><svg:path d="M10 17q1 .5 2 .5c1 0 1.333-.167 2-.5"></svg:path></svg:g>`,
})
export class TablerBrandRedditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
