import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSendCheckOutlineIcon],svg[mdi-send-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v7l15 2l-15 2v7l21-9M4 6.03l7.53 3.22l-7.53-1m7.53 6.5L4 17.97v-2.22m18-.25L18.5 19l-2-2l-1.5 1.5l3.5 3.5l5-5Z"></svg:path>`,
})
export class MdiSendCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
