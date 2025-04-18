import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFile1FilledIcon],svg[tdesign-file-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h10v8h8v14H3zm14 13v-2H7v2zm0 4v-2H7v2z"></svg:path><svg:path fill="currentColor" d="M21 6.586V7h-6V1h.414z"></svg:path>`,
})
export class TdesignFile1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
