import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPlaceholderIcon],svg[ph-placeholder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M48 208V59.31L196.69 208ZM59.31 48H208v148.7Z"></svg:path>`,
})
export class PhPlaceholderIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
