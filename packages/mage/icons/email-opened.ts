import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageEmailOpenedIcon],svg[mage-email-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m4.85 6.095l5.25-2.84a4 4 0 0 1 3.8 0l5.25 2.84a4 4 0 0 1 2.1 3.51v7.62a4 4 0 0 1-4 4H6.75a4 4 0 0 1-4-4v-7.62a4 4 0 0 1 2.1-3.51Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m2.91 8.495l7.09 4.1a4 4 0 0 0 4 0l7.14-4"></svg:path></svg:g>`,
})
export class MageEmailOpenedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
