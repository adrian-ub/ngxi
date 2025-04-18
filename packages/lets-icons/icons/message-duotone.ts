import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMessageDuotoneIcon],svg[lets-icons-message-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16v-5.757a.15.15 0 0 1 .217-.135l6.441 3.221a3 3 0 0 0 2.684 0l6.44-3.22a.15.15 0 0 1 .218.134V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2"></svg:path><svg:path fill="currentColor" fill-opacity=".25" d="M4 8v.907a.15.15 0 0 0 .083.134l6.575 3.288a3 3 0 0 0 2.684 0l6.575-3.288A.15.15 0 0 0 20 8.907V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"></svg:path>`,
})
export class LetsIconsMessageDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
