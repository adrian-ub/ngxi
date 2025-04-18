import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsExclamationFilledIcon],svg[pepicons-exclamation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 18a8 8 0 1 1 0-16a8 8 0 0 1 0 16Zm0-12a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1Zm0 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsExclamationFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
