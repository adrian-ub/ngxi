import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirUserSquareIcon],svg[iconoir-user-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1"></svg:path><svg:path stroke-linejoin="round" d="M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path stroke-linejoin="round" d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path></svg:g>`,
})
export class IconoirUserSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
