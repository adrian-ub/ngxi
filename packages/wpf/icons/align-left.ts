import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfAlignLeftIcon],svg[wpf-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v2h26V2zm0 5v2h18V7zm0 5v2h26v-2zm0 5v2h18v-2zm0 5v2h26v-2zm902 1447v2h26v-2zm4 5v2h18v-2zm-4 5v2h26v-2zm4 5v2h18v-2zm-4 5v2h26v-2z"></svg:path>`,
})
export class WpfAlignLeftIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
