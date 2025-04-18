import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleCaretDownFilledIcon],svg[tabler-circle-caret-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M15 10H9a1 1 0 0 0-.708 1.707l3 3a1 1 0 0 0 1.415 0l3-3a1 1 0 0 0 0-1.414l-.094-.083A1 1 0 0 0 15 10"></svg:path>`,
})
export class TablerCircleCaretDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
