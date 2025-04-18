import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharp60fpsSelectIcon],svg[ic-sharp-60fps-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6v6h-3V6zm2-2h-7v10h7zm-9 2V4H4v10h7V8H6V6zm-2 4v2H6v-2zM5 22H3v-5h2zm4 0H7v-5h2zm4 0h-2v-5h2zm8 0h-6v-5h6z"></svg:path>`,
})
export class IcSharp60fpsSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
