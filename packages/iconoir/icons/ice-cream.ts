import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirIceCreamIcon],svg[iconoir-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14 18v2a2 2 0 1 1-4 0v-2m-5-6h14"></svg:path><svg:path d="M7 18a2 2 0 0 1-2-2V9a7 7 0 1 1 14 0v7a2 2 0 0 1-2 2z"></svg:path></svg:g>`,
})
export class IconoirIceCreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
