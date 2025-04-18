import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDam6Icon],svg[tdesign-dam-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h18v5h1v2h-1v11h1v2h-9v-2h1v-5a2 2 0 1 0-4 0v5h1v2H2v-2h1V9H2V7h1zm2 7v11h3v-5a4 4 0 0 1 8 0v5h3V9zm14-2V4H5v3z"></svg:path>`,
})
export class TdesignDam6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
