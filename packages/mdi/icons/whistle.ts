import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWhistleIcon],svg[mdi-whistle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 9A6.5 6.5 0 0 0 2 15.5A6.5 6.5 0 0 0 8.5 22a6.5 6.5 0 0 0 6.5-6.5v-1.59L22 12V9H11v2H9V9zM11 2v5H9V2zM6.35 7.28q-1.005.24-1.92.72L2.14 4.88L3.76 3.7zm11.51-2.4L16.32 7h-2.47l2.39-3.3z"></svg:path>`,
})
export class MdiWhistleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
