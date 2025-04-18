import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShape2FillIcon],svg[ri-shape-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h5v5H2zm0 15h5v5H2zM17 2h5v5h-5zm0 15h5v5h-5zM8 4h8v2H8zM4 8h2v8H4zm14 0h2v8h-2zM8 18h8v2H8z"></svg:path>`,
})
export class RiShape2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
