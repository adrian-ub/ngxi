import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirLitecoinCircleIcon],svg[iconoir-litecoin-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10.5 7v9.4a.6.6 0 0 0 .6.6h4.4"></svg:path><svg:path stroke-linejoin="round" d="m8.5 13l4.5-2m-1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class IconoirLitecoinCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
