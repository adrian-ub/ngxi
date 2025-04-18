import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faFacebookSquareIcon],svg[fa-facebook-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1248 0q119 0 203.5 84.5T1536 288v960q0 119-84.5 203.5T1248 1536h-188V941h199l30-232h-229V561q0-56 23.5-84t91.5-28l122-1V241q-63-9-178-9q-136 0-217.5 80T820 538v171H620v232h200v595H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0z"></svg:path>`,
})
export class FaFacebookSquareIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
