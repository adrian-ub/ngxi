import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBinaryTreeIcon],svg[tabler-binary-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 20a2 2 0 1 0-4 0a2 2 0 0 0 4 0M16 4a2 2 0 1 0-4 0a2 2 0 0 0 4 0m0 16a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-5-8a2 2 0 1 0-4 0a2 2 0 0 0 4 0m10 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0M5.058 18.306l2.88-4.606m2.123-3.397l2.877-4.604m-2.873 8.006l2.876 4.6M15.063 5.7l2.881 4.61"></svg:path>`,
})
export class TablerBinaryTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
