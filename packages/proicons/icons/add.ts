import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAddIcon],svg[proicons-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h8m0 0h8m-8 0V4m0 8v8"></svg:path>`,
})
export class ProiconsAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
