import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTransform1Icon],svg[tdesign-transform-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h6v2h8V2h6v6h-2v8h2v6h-6v-2H8v2H2v-6h2V8H2zm4 6v8h2v2h8v-2h2V8h-2V6H8v2zm0-4H4v2h2zm14 2V4h-2v2zm-2 12v2h2v-2zM6 20v-2H4v2z"></svg:path>`,
})
export class TdesignTransform1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
