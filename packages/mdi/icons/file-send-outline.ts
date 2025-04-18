import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileSendOutlineIcon],svg[mdi-file-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-5.46-1.5v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiFileSendOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
