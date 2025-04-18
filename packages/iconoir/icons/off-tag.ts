import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirOffTagIcon],svg[iconoir-off-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M1 15V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6Z"></svg:path><svg:path d="M7 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 15V9h3m2 6V9h3m-8 3h2.572M17 12h2.572"></svg:path></svg:g>`,
})
export class IconoirOffTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
