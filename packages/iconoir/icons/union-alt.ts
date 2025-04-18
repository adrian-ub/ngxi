import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirUnionAltIcon],svg[iconoir-union-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14"></svg:path><svg:path d="M15 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14"></svg:path></svg:g>`,
})
export class IconoirUnionAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
