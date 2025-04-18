import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTransform1FilledIcon],svg[tdesign-transform-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h6v2h8V2h6v6h-2v8h2v6h-6v-2H8v2H2v-6h2V8H2zm4 6v8h2v2h8v-2h2V8h-2V6H8v2z"></svg:path>`,
})
export class TdesignTransform1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
