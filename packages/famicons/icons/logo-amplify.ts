import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoAmplifyIcon],svg[famicons-logo-amplify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m112.31 268l40.36-68.69l34.65 59l-67.54 115h135L289.31 432H16Zm58.57-99.76l33.27-56.67L392.44 432h-66.68ZM222.67 80h66.59L496 432h-66.68Z"></svg:path>`,
})
export class FamiconsLogoAmplifyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
