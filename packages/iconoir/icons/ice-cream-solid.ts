import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirIceCreamSolidIcon],svg[iconoir-ice-cream-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.75 20a1.25 1.25 0 1 0 2.5 0v-2h1.5v2a2.75 2.75 0 1 1-5.5 0v-2h1.5z"></svg:path><svg:path d="M4.25 16a2.75 2.75 0 0 0 2.751 2.75H17A2.75 2.75 0 0 0 19.75 16V9a7.75 7.75 0 0 0-15.5 0zm13-3.25a.75.75 0 0 0 0-1.5H6.75a.75.75 0 0 0 0 1.5z"></svg:path></svg:g>`,
})
export class IconoirIceCreamSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
