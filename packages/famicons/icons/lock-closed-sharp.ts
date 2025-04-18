import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsLockClosedSharpIcon],svg[famicons-lock-closed-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M420 192h-68v-80a96 96 0 1 0-192 0v80H92a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V204a12 12 0 0 0-12-12m-106 0H198v-80.75a58 58 0 1 1 116 0Z"></svg:path>`,
})
export class FamiconsLockClosedSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
