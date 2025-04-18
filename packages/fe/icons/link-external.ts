import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feLinkExternalIcon],svg[fe-link-external-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 8h5v2H6v8h8v-5h2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2m10.614-2H12V4h8v8h-2V7.442l-5.336 5.336l-1.414-1.414z"></svg:path>`,
})
export class FeLinkExternalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
