import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatFavoriteIcon],svg[topcoat-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 1c1.081 0 5.141 12.315 6.201 13.126s13.461 1.053 13.791 2.137c.34 1.087-9.561 8.938-9.961 10.252c-.409 1.307 3.202 13.769 2.331 14.442c-.879.673-11.05-6.79-12.361-6.79S9.52 41.63 8.641 40.957c-.871-.674 2.739-13.136 2.329-14.442c-.399-1.313-10.3-9.165-9.96-10.252c.33-1.084 12.731-1.326 13.791-2.137S19.91 1 21 1"></svg:path>`,
})
export class TopcoatFavoriteIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
