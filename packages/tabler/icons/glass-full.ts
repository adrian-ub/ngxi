import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGlassFullIcon],svg[tabler-glass-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 21h8m-4-6v6m5-18l1 7c0 3.012-2.686 5-6 5s-6-1.988-6-5l1-7z"></svg:path><svg:path d="M6 10a5 5 0 0 1 6 0a5 5 0 0 0 6 0"></svg:path></svg:g>`,
})
export class TablerGlassFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
