import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTriangleOffIcon],svg[tabler-triangle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.825 7.83l-5.568 9.295a1.914 1.914 0 0 0 1.636 2.871H20m1.998-1.99a1.9 1.9 0 0 0-.255-.88L13.637 3.59a1.914 1.914 0 0 0-3.274 0L9.335 5.308M3 3l18 18"></svg:path>`,
})
export class TablerTriangleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
