import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBracketsContainEndIcon],svg[tabler-brackets-contain-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 4h4v16h-4m-9-4h.01M9 16h.01M13 16h.01"></svg:path>`,
})
export class TablerBracketsContainEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
