import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggLaptopIcon],svg[gg-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 0h14v8H5z" clip-rule="evenodd"></svg:path><svg:path d="M2 18a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2z"></svg:path></svg:g>`,
})
export class GgLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
