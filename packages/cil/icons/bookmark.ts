import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBookmarkIcon],svg[cil-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M424 496h-35.25L256.008 381.19L123.467 496H88V16h336ZM120 48v408.667l135.992-117.8L392 456.5V48Z"></svg:path>`,
})
export class CilBookmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
