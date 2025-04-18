import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStat2Icon],svg[material-symbols-stat-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.4 18.4L6 17l6-6l6 6l-1.4 1.4l-4.6-4.575zm0-6L6 11l6-6l6 6l-1.4 1.4L12 7.825z"></svg:path>`,
})
export class MaterialSymbolsStat2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
