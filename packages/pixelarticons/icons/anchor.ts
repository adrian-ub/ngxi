import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAnchorIcon],svg[pixelarticons-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3h-4v2H8v4h2v2h1v8H6v-4h2v-2H4v6h2v2h12v-2h2v-6h-4v2h2v4h-5v-8h1V9h2V5h-2zm0 2v4h-4V5z"></svg:path>`,
})
export class PixelarticonsAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
