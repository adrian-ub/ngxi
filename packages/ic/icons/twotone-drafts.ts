import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneDraftsIcon],svg[ic-twotone-drafts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.36l-8-5.02V18h16l-.01-7.63z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1L2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zM12 3.32L19.99 8v.01L12 13L4 8zM4 18v-7.66l8 5.02l7.99-4.99L20 18z"></svg:path>`,
})
export class IcTwotoneDraftsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
