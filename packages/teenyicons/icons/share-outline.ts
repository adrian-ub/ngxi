import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsShareOutlineIcon],svg[teenyicons-share-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" d="M4.5 7.5h4M11 4L8.5 7.495L11 11m3.5-8.501a2 2 0 0 1-4 0a2 2 0 0 1 4 0Zm0 9.993a2 2 0 0 1-4 0a2 2 0 0 1 4 0Zm-10-4.997a2 2 0 0 1-4 0a2 2 0 0 1 4 0Z"></svg:path>`,
})
export class TeenyiconsShareOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
