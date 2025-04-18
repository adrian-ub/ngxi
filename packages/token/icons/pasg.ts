import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPasgIcon],svg[token-pasg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.439 12A8.439 8.439 0 1 1 3.56 12a8.439 8.439 0 0 1 16.878 0M21 12a9 9 0 1 1-17.999 0A9 9 0 0 1 21 12m-2.35 0a6.65 6.65 0 1 1-13.3 0a6.65 6.65 0 0 1 13.3 0m1.291 0a7.942 7.942 0 1 1-15.883 0a7.942 7.942 0 0 1 15.883 0M9.088 9.353a1.324 1.324 0 0 0-1.323 1.323v2.647a1.323 1.323 0 1 0 2.647 0v-1.127h-.953l.953-1.075v-.445a1.323 1.323 0 0 0-1.324-1.323m4.5 1.323a1.324 1.324 0 0 1 2.647 0v.445l-.953 1.08h.953v1.122a1.323 1.323 0 1 1-2.647 0z" clip-rule="evenodd"></svg:path>`,
})
export class TokenPasgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
