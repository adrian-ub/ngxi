import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMxmIcon],svg[token-mxm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.605 4.125h-3.283L3 16.955l1.654 2.92h14.619L21 16.955zM4.547 16.5l6.382-11.25h1.405L6.72 15.375h6.452l.748 1.125zm4.112-2.25l4.67-8.413l6.366 11.043l-.71 1.31l-5.656-9.754l-3.182 5.814zm2.778 0L12 13.125l.563 1.125zm1.91-3.598l4.687 8.095H5.285l-.691-1.122h11.381l-3.284-5.778z"></svg:path>`,
})
export class TokenMxmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
