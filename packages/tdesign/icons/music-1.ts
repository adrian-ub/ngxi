import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMusic1Icon],svg[tdesign-music-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 .847V17a4 4 0 1 1-2-3.465V3.153L8 4.867V19a4 4 0 1 1-2-3.465V3.133zM6 19a2 2 0 1 0-4 0a2 2 0 0 0 4 0m14-2a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path>`,
})
export class TdesignMusic1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
