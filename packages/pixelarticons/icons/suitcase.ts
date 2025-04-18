import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSuitcaseIcon],svg[pixelarticons-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3h8v4h6v14H2V7h6zm2 4h4V5h-4zM4 9v10h16V9zm4 2v6H6v-6zm10 0v6h-2v-6z"></svg:path>`,
})
export class PixelarticonsSuitcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
