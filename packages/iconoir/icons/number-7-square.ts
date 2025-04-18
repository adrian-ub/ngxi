import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirNumber7SquareIcon],svg[iconoir-number-7-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.5 16c0-4 4-8 4-8h-5"></svg:path></svg:g>`,
})
export class IconoirNumber7SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
