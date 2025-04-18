import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphNetwork2Icon],svg[si-glyph-network-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.494 15.958C4.361 15.958 1 12.622 1 8.52s3.361-7.438 7.494-7.438s7.495 3.336 7.495 7.438s-3.362 7.438-7.495 7.438m.016-14.02A6.58 6.58 0 0 0 1.938 8.51a6.58 6.58 0 0 0 6.572 6.573a6.58 6.58 0 0 0 6.573-6.573A6.58 6.58 0 0 0 8.51 1.938"></svg:path><svg:path d="M8 2h.922v14.084H8z"></svg:path><svg:path d="M1 8h13.96v.922H1zm1-3h12.406v.906H2zm0 6h12.406v.922H2z"></svg:path><svg:path d="M8.317 15.854c-2.597-1.273-4.274-4.192-4.274-7.437c0-3.17 1.623-6.062 4.138-7.367l.461.887c-2.187 1.137-3.599 3.68-3.599 6.48c0 2.865 1.459 5.432 3.714 6.538z"></svg:path><svg:path d="m8.74 15.789l-.469-.883c2.139-1.134 3.521-3.681 3.521-6.489c0-2.775-1.359-5.31-3.46-6.457l.479-.877c2.418 1.318 3.981 4.197 3.981 7.334c.001 3.175-1.591 6.068-4.052 7.372"></svg:path></svg:g>`,
})
export class SiGlyphNetwork2Icon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
