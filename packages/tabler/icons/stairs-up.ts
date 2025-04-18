import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerStairsUpIcon],svg[tabler-stairs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 6h-5v5h-5v5H7v5H2m4-11V3M3 6l3-3l3 3"></svg:path>`,
})
export class TablerStairsUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
