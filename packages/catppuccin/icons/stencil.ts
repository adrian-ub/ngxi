import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinStencilIcon],svg[catppuccin-stencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#b7bdf8" stroke-linecap="round" stroke-linejoin="round" d="M14.5 6.5H4l-2.5 3H12zm-8 5h5l-2.5 3H4zM8 1.5h5l-2.5 3h-5z"></svg:path>`,
})
export class CatppuccinStencilIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
