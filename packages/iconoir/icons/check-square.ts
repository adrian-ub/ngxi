import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCheckSquareIcon],svg[iconoir-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 12.5l3 3l7-7"></svg:path></svg:g>`,
})
export class IconoirCheckSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
