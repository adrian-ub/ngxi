import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsScrollHorizontalIcon],svg[pixelarticons-scroll-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v2H2V2zm0 18v2H2v-2zm-6-5v-2H8v2H6v-2H4v-2h2V9h2v2h8V9h2v2h2v2h-2v2zm0 0v2h-2v-2zm0-6h-2V7h2zM8 9V7h2v2zm0 6h2v2H8z"></svg:path>`,
})
export class PixelarticonsScrollHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
