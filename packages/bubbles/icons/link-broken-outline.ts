import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesLinkBrokenOutlineIcon],svg[bubbles-link-broken-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 15.749h1.875a3.963 3.963 0 0 0 4.125-3.75a3.96 3.96 0 0 0-4.125-3.75H16.5m-9 7.501H5.625A3.963 3.963 0 0 1 1.5 12a3.963 3.963 0 0 1 4.125-3.75H7.5M12 5.249v-4.5m-3 4.5l-1.5-1.5m7.5 1.5l1.5-1.5m-4.5 15v4.5m-3-4.5l-1.5 1.5m7.5-1.5l1.5 1.5"></svg:path>`,
})
export class BubblesLinkBrokenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
