import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCaneIcon],svg[tabler-cane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 21l6.324-11.69c.54-.974 1.756-4.104-1.499-5.762S8.65 4.411 8 5.58"></svg:path>`,
})
export class TablerCaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
