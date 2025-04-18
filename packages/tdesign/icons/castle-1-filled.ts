import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle1FilledIcon],svg[tdesign-castle-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4V2H5v4h1v8H3v-1H1v9h10v-9h2v9h10v-9h-2v1h-3V6h1V2h-2v2h-2V2h-2v2h-2V2H9v2zm4.004 3.998v2.004H9V7.998zm4 0v2.004H13V7.998z"></svg:path>`,
})
export class TdesignCastle1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
