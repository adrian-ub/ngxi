import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandRustIcon],svg[tabler-brand-rust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10.139 3.463c.473-1.95 3.249-1.95 3.722 0a1.916 1.916 0 0 0 2.859 1.185c1.714-1.045 3.678.918 2.633 2.633a1.916 1.916 0 0 0 1.184 2.858c1.95.473 1.95 3.249 0 3.722a1.916 1.916 0 0 0-1.185 2.859c1.045 1.714-.918 3.678-2.633 2.633a1.916 1.916 0 0 0-2.858 1.184c-.473 1.95-3.249 1.95-3.722 0a1.916 1.916 0 0 0-2.859-1.185c-1.714 1.045-3.678-.918-2.633-2.633a1.916 1.916 0 0 0-1.184-2.858c-1.95-.473-1.95-3.249 0-3.722A1.916 1.916 0 0 0 4.648 7.28c-1.045-1.714.918-3.678 2.633-2.633a1.914 1.914 0 0 0 2.858-1.184"></svg:path><svg:path d="M8 12h6a2 2 0 1 0 0-4H8v8z"></svg:path><svg:path d="M19 16h-2a2 2 0 0 1-2-2a2 2 0 0 0-2-2h-1M9 8H5m0 8h4"></svg:path></svg:g>`,
})
export class TablerBrandRustIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
