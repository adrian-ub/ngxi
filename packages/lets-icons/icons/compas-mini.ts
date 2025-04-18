import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompasMiniIcon],svg[lets-icons-compas-mini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="m18.54 7.762l-.835 5.01a6 6 0 0 1-4.932 4.933l-5.011.835a2 2 0 0 1-2.302-2.302l.835-5.01a6 6 0 0 1 4.932-4.933l5.011-.835a2 2 0 0 1 2.302 2.302Z"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle></svg:g>`,
})
export class LetsIconsCompasMiniIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
