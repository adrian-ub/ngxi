import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerStairsDownIcon],svg[tabler-stairs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 21h-5v-5h-5v-5H7V6H2m16-3v7m-3-3l3 3l3-3"></svg:path>`,
})
export class TablerStairsDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
