import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTextColorIcon],svg[tabler-text-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 15V8a3 3 0 0 1 6 0v7m-6-4h6M5 19h14"></svg:path>`,
})
export class TablerTextColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
