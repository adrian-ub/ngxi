import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePassportIcon],svg[streamline-passport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M7 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6M4 6h6M7 9V3"></svg:path></svg:g>`,
})
export class StreamlinePassportIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
