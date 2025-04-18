import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMouseOffIcon],svg[tabler-mouse-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.733 3.704A4 4 0 0 1 10 3h4a4 4 0 0 1 4 4v7m-.1 3.895A4 4 0 0 1 14 21h-4a4 4 0 0 1-4-4V7q0-.451.096-.874M12 7v1M3 3l18 18"></svg:path>`,
})
export class TablerMouseOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
