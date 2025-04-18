import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAndroidSolidIcon],svg[teenyicons-android-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 4a6.5 6.5 0 0 0-2.934.698l-1.65-2.475l-.832.554l1.627 2.44A6.5 6.5 0 0 0 1 10.5V13h13v-2.5a6.5 6.5 0 0 0-2.711-5.282l1.627-2.44l-.832-.555l-1.65 2.475A6.5 6.5 0 0 0 7.5 4M5 10H4V9h1zm5 0h1V9h-1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsAndroidSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
