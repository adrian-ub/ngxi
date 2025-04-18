import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laInboxIcon],svg[la-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.156 5L7 5.844l-2 13V27h22v-8.156l-2-13L24.844 5zm1.719 2h14.25l1.688 11H18v1c0 1.117-.883 2-2 2s-2-.883-2-2v-1H7.187zM7 20h5.188c.453 1.71 1.964 3 3.812 3s3.36-1.29 3.813-3H25v5H7z"></svg:path>`,
})
export class LaInboxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
