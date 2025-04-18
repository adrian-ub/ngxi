import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPocketIcon],svg[iconoir-pocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 6v5a9 9 0 1 1-18 0V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"></svg:path><svg:path d="m8 10l4 4l4-4"></svg:path></svg:g>`,
})
export class IconoirPocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
