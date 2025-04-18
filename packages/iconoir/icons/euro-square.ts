import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirEuroSquareIcon],svg[iconoir-euro-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 7.503A4.75 4.75 0 0 0 13.87 7C11.18 7 9 9.239 9 12s2.18 5 4.87 5a4.7 4.7 0 0 0 2.13-.503M8 11h6m-6 2h6"></svg:path></svg:g>`,
})
export class IconoirEuroSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
