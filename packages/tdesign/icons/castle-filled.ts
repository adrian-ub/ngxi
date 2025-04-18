import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCastleFilledIcon],svg[tdesign-castle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2v2h2V2h2v2h2V2h2v2h2V2h2v12h2v-1h2v9h-7.5v-8h-7v8H1v-9h2v1h2V2z"></svg:path><svg:path fill="currentColor" d="M13.5 22v-6h-3v6z"></svg:path>`,
})
export class TdesignCastleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
