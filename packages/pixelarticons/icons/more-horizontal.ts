import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMoreHorizontalIcon],svg[pixelarticons-more-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 9h6v6H1zm2 2v2h2v-2zm6-2h6v6H9zm2 2v2h2v-2zm6-2h6v6h-6zm2 2v2h2v-2z"></svg:path>`,
})
export class PixelarticonsMoreHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
