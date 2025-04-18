import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPointerCodeIcon],svg[tabler-pointer-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15.76 13.203l-.982-.981l3.113-2.09a1.2 1.2 0 0 0-.309-2.228L4 4l3.904 13.563a1.2 1.2 0 0 0 2.228.308l2.09-3.093l.67.67M20 21l2-2l-2-2m-3 0l-2 2l2 2"></svg:path>`,
})
export class TablerPointerCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
