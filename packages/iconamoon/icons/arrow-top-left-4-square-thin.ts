import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft4SquareThinIcon],svg[iconamoon-arrow-top-left-4-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M14 10h-4v4"></svg:path></svg:g>`,
})
export class IconamoonArrowTopLeft4SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
