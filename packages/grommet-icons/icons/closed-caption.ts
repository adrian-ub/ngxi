import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsClosedCaptionIcon],svg[grommet-icons-closed-caption-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 12c0-7 1.5-8 11-8s11 1 11 8s-1.5 8-11 8s-11-1-11-8Zm4.25 2c0 1.5.75 2 2.5 2s2.5-.5 2.5-2h-.271c0 1.25-1 2-2.229 2s-2.229-.75-2.229-2v-4C5.5 8.75 6.5 8 7.75 8s2.25.75 2.229 2h.271c0-1.25-1.021-2-2.5-2s-2.5.75-2.5 2zm8 0c0 1.5.75 2 2.5 2s2.5-.5 2.5-2h-.271c0 1.25-1 2-2.229 2s-2.229-.75-2.229-2v-4c-.021-1.25.979-2 2.229-2s2.25.75 2.229 2h.271c0-1.25-1.021-2-2.5-2s-2.5.75-2.5 2z"></svg:path>`,
})
export class GrommetIconsClosedCaptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
