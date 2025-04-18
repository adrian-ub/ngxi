import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilServerOutlineIcon],svg[basil-server-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-2 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.947 3.25A2.75 2.75 0 0 0 3.197 6v3c0 .788.332 1.499.863 2a2.74 2.74 0 0 0-.863 2v3a2.75 2.75 0 0 0 2.75 2.75h5.303v1.5H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5h-6.25v-1.5h5.197a2.75 2.75 0 0 0 2.75-2.75v-3c0-.788-.331-1.499-.862-2a2.74 2.74 0 0 0 .862-2V6a2.75 2.75 0 0 0-2.75-2.75zm0 7h12c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25h-12c-.69 0-1.25.56-1.25 1.25v3c0 .69.56 1.25 1.25 1.25m0 1.5c-.69 0-1.25.56-1.25 1.25v3c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class BasilServerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
