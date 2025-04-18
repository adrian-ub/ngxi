import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandVercelFilledIcon],svg[tabler-brand-vercel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.143 3.486a1 1 0 0 1 1.714 0l9 15A1 1 0 0 1 21 20H3a1 1 0 0 1-.857-1.514z"></svg:path>`,
})
export class TablerBrandVercelFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
