import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFinancingOneIcon],svg[icon-park-outline-financing-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M15 14.385C19.126 16 24.01 16 24.01 16s4.87 0 8.99-1.615c4.502 5.254 7.657 12.18 9.73 18.013C44.829 38.303 40.2 44 33.934 44H14.02c-6.252 0-10.874-5.67-8.786-11.563C7.298 26.614 10.455 19.686 15 14.385Z"></svg:path><svg:path stroke-linecap="round" d="M18 28h12m-12 6h12m-5.991-6v10M30 22l-6 6l-6-6"></svg:path><svg:path stroke-linecap="round" d="M24 16c7.18 0 13-2.686 13-6s-5.82-6-13-6s-13 2.686-13 6s5.82 6 13 6" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkOutlineFinancingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
