import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandCss3Icon],svg[tabler-brand-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m20 4l-2 14.5l-6 2l-6-2L4 4z"></svg:path><svg:path d="M8.5 8h7L11 12h4l-.5 3.5l-2.5.75l-2.5-.75l-.1-.5"></svg:path></svg:g>`,
})
export class TablerBrandCss3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
