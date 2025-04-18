import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMaskSquareIcon],svg[iconoir-mask-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path><svg:path d="M10 17.659a6 6 0 0 0 4-11.317m-4 11.317a6 6 0 1 1 4-11.317m-4 11.317L14 6.34"></svg:path></svg:g>`,
})
export class IconoirMaskSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
