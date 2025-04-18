import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiHandPointUpIcon],svg[gravity-ui-hand-point-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiHandPointUp0)"><svg:path fill="currentColor" fill-rule="evenodd" d="m6 13.5l-3.737-2.906a1.978 1.978 0 0 1 1.694-3.48L5 7.375V1.942a1.942 1.942 0 0 1 3.838-.421L9.5 4.5l2.744.457A3 3 0 0 1 14.65 8.69L13.5 13zm7.2-5.197l-.872 3.272l-5.858.39L3.184 9.41a.478.478 0 0 1 .41-.84l1.042.26l1.864.466V1.942a.442.442 0 0 1 .874-.096l.662 2.98l.22.987l.997.167l2.744.457A1.5 1.5 0 0 1 13.2 8.303m.103 7.195a.75.75 0 0 0-.106-1.496l-7 .5a.75.75 0 1 0 .106 1.496z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiHandPointUp0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiHandPointUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
