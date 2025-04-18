import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBowIcon],svg[tabler-bow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 3h4v4m0-4L6 18m-3 0h3v3m10.5-1c1.576-1.576 2.5-4.095 2.5-6.5C19 8.69 15.31 5 10.5 5C8.085 5 5.578 5.913 4 7.5z"></svg:path>`,
})
export class TablerBowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
