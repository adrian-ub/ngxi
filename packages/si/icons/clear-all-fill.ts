import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siClearAllFillIcon],svg[si-clear-all-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm-3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m-2 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"></svg:path>`,
})
export class SiClearAllFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
