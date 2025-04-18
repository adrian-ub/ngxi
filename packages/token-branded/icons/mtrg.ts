import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMtrgIcon],svg[token-branded-mtrg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#1C2C5F"><svg:path d="M12 3.947a8.29 8.29 0 0 1 7.578 5.21l-1.42.238a6.6 6.6 0 0 0-6.159-3.984C8.314 5.41 5.292 8.3 5.368 12L4.04 13.255A8.067 8.067 0 0 1 12 3.947m-6.021 10.73a6.61 6.61 0 0 0 6.016 3.912c3.727 0 6.75-3.126 6.636-6.826l1.364-.73a8.06 8.06 0 0 1-4.692 8.31a8.1 8.1 0 0 1-3.304.71a8.08 8.08 0 0 1-7.313-4.737z"></svg:path><svg:path d="m3 14.842l8.053-5.685l-.474 2.369l4.737-2.369l-.474 2.369L21 9.63l-8.29 4.026l.711-2.131l-4.737 2.368L9.158 12z"></svg:path></svg:g>`,
})
export class TokenBrandedMtrgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
