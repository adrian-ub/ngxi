import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBackspaceIcon],svg[tabler-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5-5a1.5 1.5 0 0 1 0-2l5-5zm-8 4l4 4m0-4l-4 4"></svg:path>`,
})
export class TablerBackspaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
