import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsEditBoxIcon],svg[pixelarticons-edit-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2h-2v2h2zM4 4h6v2H4v14h14v-6h2v8H2V4zm4 8H6v6h6v-2h2v-2h-2v2H8zm4-2h-2v2H8v-2h2V8h2V6h2v2h-2zm2-6h2v2h-2zm4 0h2v2h2v2h-2v2h-2v2h-2v-2h2V8h2V6h-2zm-4 8h2v2h-2z"></svg:path>`,
})
export class PixelarticonsEditBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
