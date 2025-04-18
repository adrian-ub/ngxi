import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlaneOffIcon],svg[tabler-plane-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.788 5.758L9 3h3l4 7h4a2 2 0 1 1 0 4h-2m-2.718 1.256L12 21H9l2-7H7l-2 2H2l2-4l-2-4h3l2 2h3M3 3l18 18"></svg:path>`,
})
export class TablerPlaneOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
