import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStat3Icon],svg[material-symbols-stat-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.4 21.375l-1.4-1.4l6-6l6 6l-1.4 1.4L12 16.8zm0-6l-1.4-1.4l6-6l6 6l-1.4 1.4L12 10.8zm0-6L6 7.975l6-6l6 6l-1.4 1.4L12 4.8z"></svg:path>`,
})
export class MaterialSymbolsStat3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
