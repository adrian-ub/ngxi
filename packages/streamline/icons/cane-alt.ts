import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCaneAltIcon],svg[streamline-cane-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 3a1 1 0 0 0-1 1v.25a1.25 1.25 0 1 1-2.5 0V4a3.5 3.5 0 1 1 7 0v8.25a1.25 1.25 0 1 1-2.5 0V4a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCaneAltIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
