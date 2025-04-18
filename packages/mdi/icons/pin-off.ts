import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPinOffIcon],svg[mdi-pin-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-5.93-5.93V22h-1.6v-6H6v-2l2-2v-.73zM16 12l2 2v2h-.18L8 6.18V4H7V2h10v2h-1z"></svg:path>`,
})
export class MdiPinOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
