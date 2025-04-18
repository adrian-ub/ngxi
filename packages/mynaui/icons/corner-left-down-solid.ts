import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerLeftDownSolidIcon],svg[mynaui-corner-left-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.483 14.763a.75.75 0 0 1-.026-1.06h4.82V9a4.75 4.75 0 0 1 4.75-4.75H19a.75.75 0 0 1 0 1.5h-4.973A3.25 3.25 0 0 0 10.777 9v4.703h4.821a.75.75 0 0 1-.027 1.06l-5.027 4.78a.75.75 0 0 1-1.034 0z"></svg:path>`,
})
export class MynauiCornerLeftDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
