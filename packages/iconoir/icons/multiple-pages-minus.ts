import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMultiplePagesMinusIcon],svg[iconoir-multiple-pages-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 2h9.5L21 6.5V19"></svg:path><svg:path d="M11 22h5.5a1.5 1.5 0 0 0 1.5-1.5V8.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 14.25 5H4.5A1.5 1.5 0 0 0 3 6.5V13m-1.008 6h6"></svg:path><svg:path d="M14 5v3.4a.6.6 0 0 0 .6.6H18"></svg:path></svg:g>`,
})
export class IconoirMultiplePagesMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
