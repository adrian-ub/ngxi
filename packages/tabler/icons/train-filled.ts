import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTrainFilledIcon],svg[tabler-train-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5c6.634 0 10.853 3.11 10.996 7.754L22 13a3 3 0 0 1-3 3H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM7 7H4v3h3zm4 0H9v3h3V7.026A19 19 0 0 0 11 7m3.001.257L14 10h5.04c-.979-1.337-2.689-2.306-5.039-2.743M21 18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"></svg:path>`,
})
export class TablerTrainFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
