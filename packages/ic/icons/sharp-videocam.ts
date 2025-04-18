import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpVideocamIcon],svg[ic-sharp-videocam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10.5V6H3v12h14v-4.5l4 4v-11z"></svg:path>`,
})
export class IcSharpVideocamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
