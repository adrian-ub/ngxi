import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignForestIcon],svg[tdesign-forest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 .214l5 13l5-13L23.456 17H18v5h-2v-5H8v5H6v-5H.544zM8 15h2.544L8 8.385zM6 8.385L3.456 15H6zM13.456 15H16V8.385zM18 8.385V15h2.544z"></svg:path>`,
})
export class TdesignForestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
