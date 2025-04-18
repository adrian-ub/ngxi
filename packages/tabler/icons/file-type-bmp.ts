import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileTypeBmpIcon],svg[tabler-file-type-bmp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 3v4a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4m-1 6h1.5a1.5 1.5 0 0 0 0-3H18v6M4 21h1.5a1.5 1.5 0 0 0 0-3H4h1.5a1.5 1.5 0 0 0 0-3H4zm6 0v-6l2.5 3l2.5-3v6"></svg:path></svg:g>`,
})
export class TablerFileTypeBmpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
