import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeAltIcon],svg[iconoir-home-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10 18v-3a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v3M2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8"></svg:path><svg:path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></svg:path></svg:g>`,
})
export class IconoirHomeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
