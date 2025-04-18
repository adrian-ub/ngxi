import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRotateIcon],svg[tabler-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.95 11a8 8 0 1 0-.5 4m.5 5v-5h-5"></svg:path>`,
})
export class TablerRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
