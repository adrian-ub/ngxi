import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesDownloadDrawerOutlineIcon],svg[bubbles-download-drawer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.168 15a5.951 5.951 0 0 1-10.336 0H3a1.5 1.5 0 0 0-1.5 1.5V21A1.5 1.5 0 0 0 3 22.5h18a1.5 1.5 0 0 0 1.5-1.5v-4.5A1.5 1.5 0 0 0 21 15zM12 12V1.5M8.25 9L12 12l3.75-3"></svg:path>`,
})
export class BubblesDownloadDrawerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
