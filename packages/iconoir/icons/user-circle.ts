import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirUserCircleIcon],svg[iconoir-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class IconoirUserCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
