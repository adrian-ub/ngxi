import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifTtIcon],svg[cif-tt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#CE1126" d="M.5.5h300v180H.5z"></svg:path><svg:path fill="#FFF" d="m.5.5l208.248 180H300.5L92.253.5z"></svg:path><svg:path fill="#000" d="m15.792.5l208.247 180h61.169L76.961.5z"></svg:path></svg:g>`,
})
export class CifTtIcon {
  readonly viewBox = input("0 0 301 181")
  readonly width = input("1.67em")
  readonly height = input("1em")
}
