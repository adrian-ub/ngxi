import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerLeftDownIcon],svg[mynaui-corner-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.027 19V9a4 4 0 0 1 4-4H19m-8.973 14l5.028-4.78M10.027 19L5 14.22"></svg:path>`,
})
export class MynauiCornerLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
