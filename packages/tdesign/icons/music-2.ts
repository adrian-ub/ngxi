import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMusic2Icon],svg[tdesign-music-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3h7v2h-5v13a4 4 0 1 1-2-3.465zm0 15a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path>`,
})
export class TdesignMusic2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
