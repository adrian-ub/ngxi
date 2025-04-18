import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirWrapTextIcon],svg[iconoir-wrap-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 7h16M4 17h5m-5-5h13.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5h-5"></svg:path><svg:path d="M15 15.5L12.5 17l2.5 1.5z"></svg:path></svg:g>`,
})
export class IconoirWrapTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
