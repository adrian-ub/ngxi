import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPinOffOutlineIcon],svg[mdi-pin-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6.2V4H7V2h10v2h-1v8l2 2v2h-.2L14 12.2V4h-4v4.2zm12 14.5L18.7 22l-5.9-5.9V22h-1.6v-6H6v-2l2-2v-.7l-6-6L3.3 4zM8.8 14h1.8l-.9-.9z"></svg:path>`,
})
export class MdiPinOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
