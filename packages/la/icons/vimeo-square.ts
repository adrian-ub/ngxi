import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laVimeoSquareIcon],svg[la-vimeo-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm13.879 3c-1.908 0-3.203.828-3.879 3.045c.844-.362 2.091-.457 1.945.955c-.039.478-.462 1.358-1.039 2.271c-1.602 2.527-1.992 1.683-2.875-3.896q-.373-2.355-1.98-2.2c-.947.087-2.463 1.594-4.051 2.99l.646.835c.616-.435.977-.61 1.08-.61c.897 0 1.357 2.33 2.442 6.303c.555 1.481 1.23 2.221 2.035 2.221q1.944 0 4.754-3.65c1.812-2.33 2.854-4.167 2.914-5.506c.051-1.71-.678-2.758-1.992-2.758"></svg:path>`,
})
export class LaVimeoSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
