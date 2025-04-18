import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiClipboardListOutlineIcon],svg[mdi-clipboard-list-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M7 7h10V5h2v14H5V5h2zm5 10v-2h5v2zm0-6V9h5v2zm-4 1V9H7V8h2v4zm1.25 2c.41 0 .75.34.75.75c0 .2-.08.39-.21.52L8.12 17H10v1H7v-.92L9 15H7v-1z"></svg:path>`,
})
export class MdiClipboardListOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
