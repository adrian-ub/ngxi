import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRoundedCornerIcon],svg[ri-rounded-corner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19v2h-2v-2zm-4 0v2h-2v-2zm-4 0v2h-2v-2zm-4 0v2H7v-2zm-4 0v2H3v-2zm16-4v2h-2v-2zM5 15v2H3v-2zm0-4v2H3v-2zm11-8a5 5 0 0 1 4.995 4.783L21 8v5h-2V8a3.01 3.01 0 0 0-2.824-2.995L16 5h-5V3zM5 7v2H3V7zm0-4v2H3V3zm4 0v2H7V3z"></svg:path>`,
})
export class RiRoundedCornerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
