import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCss3Icon],svg[iconoir-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4 3l1.778 17.09L12 22l6.222-1.91L20 3z"></svg:path><svg:path d="M7 7h9.5l-1 10l-3.5 1l-3.5-1l-.25-2.5m7.75-3H7.5"></svg:path></svg:g>`,
})
export class IconoirCss3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
