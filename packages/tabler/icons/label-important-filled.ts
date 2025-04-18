import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLabelImportantFilledIcon],svg[tabler-label-important-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.52 6a2 2 0 0 1 1.561.75l3.7 4.625a1 1 0 0 1 0 1.25l-3.7 4.624A2 2 0 0 1 16.52 18H4a1 1 0 0 1-.78-1.625L6.72 12l-3.5-4.375a1 1 0 0 1 .668-1.62L4 6z"></svg:path>`,
})
export class TablerLabelImportantFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
