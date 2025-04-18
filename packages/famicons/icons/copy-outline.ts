import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsCopyOutlineIcon],svg[famicons-copy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="336" height="336" x="128" y="128" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="57" ry="57"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"></svg:path>`,
})
export class FamiconsCopyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
