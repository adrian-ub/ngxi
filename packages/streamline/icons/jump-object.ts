import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineJumpObjectIcon],svg[streamline-jump-object-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 13.451h13M.5.549h13m-4.254 9.675H4.75a1 1 0 0 1-1-1V4.778a1 1 0 0 1 1-1h4.495a1 1 0 0 1 1 1v4.446a1 1 0 0 1-1 1Z"></svg:path>`,
})
export class StreamlineJumpObjectIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
