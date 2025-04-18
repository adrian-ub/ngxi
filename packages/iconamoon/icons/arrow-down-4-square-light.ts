import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown4SquareLightIcon],svg[iconamoon-arrow-down-4-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="m9 11l3 3l3-3"></svg:path></svg:g>`,
})
export class IconamoonArrowDown4SquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
