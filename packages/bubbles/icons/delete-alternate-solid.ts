import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesDeleteAlternateSolidIcon],svg[bubbles-delete-alternate-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.657 2.34A8.007 8.007 0 1 0 2.33 13.66A8.007 8.007 0 0 0 13.657 2.34m-1.178 10.14a6.34 6.34 0 1 1-8.97-8.96a6.34 6.34 0 0 1 8.97 8.96"></svg:path><svg:path d="M11.325 4.673a.85.85 0 0 0-1.2 0L8.007 6.791l-2.12-2.118a.851.851 0 0 0-1.204 1.204L6.8 7.995l-2.117 2.12a.852.852 0 0 0 1.203 1.203L8.003 9.2l2.118 2.119a.851.851 0 0 0 1.2-1.204L9.204 7.996l2.117-2.118a.85.85 0 0 0 .004-1.205"></svg:path></svg:g>`,
})
export class BubblesDeleteAlternateSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
