import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCallReceivedIcon],svg[mdi-call-received-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5.41L18.59 4L7 15.59V9H5v10h10v-2H8.41"></svg:path>`,
})
export class MdiCallReceivedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
