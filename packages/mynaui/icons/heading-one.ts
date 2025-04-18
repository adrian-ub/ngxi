import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiHeadingOneIcon],svg[mynaui-heading-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 4.5v15m9.5-15v15M3.75 12h9.5m3.25-.125l3-2.375v10"></svg:path>`,
})
export class MynauiHeadingOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
