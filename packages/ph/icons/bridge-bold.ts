import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBridgeBoldIcon],svg[ph-bridge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 156h-28v-44.51a76.4 76.4 0 0 0 23.49 15a12 12 0 0 0 9-22.25A51.81 51.81 0 0 1 204 56a12 12 0 0 0-24 0a52 52 0 0 1-104 0a12 12 0 0 0-24 0a51.81 51.81 0 0 1-32.5 48.22a12 12 0 1 0 9 22.25a76.4 76.4 0 0 0 23.49-15V156H24a12 12 0 0 0 0 24h28v20a12 12 0 0 0 24 0v-20h104v20a12 12 0 0 0 24 0v-20h28a12 12 0 0 0 0-24m-92-24.95V156h-24v-24.95a76.3 76.3 0 0 0 24 0m-64-19.67a76.4 76.4 0 0 0 16 11.53V156H76ZM164 156v-33.09a76.4 76.4 0 0 0 16-11.53V156Z"></svg:path>`,
})
export class PhBridgeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
