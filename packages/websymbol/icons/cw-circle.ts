import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolCwCircleIcon],svg[websymbol-cw-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1000 501q0 136-67 251T751 934t-251 67t-251-67T67 752T0 501t67-251T249 68T500 1t251 67t182 182t67 251m-260 80l180-180H800q-30-92-118.5-152.5T495 188q-131 0-224 92.5T178 504t93 223.5T495 820t223-92l-62-71q-66 64-156 64q-91 0-155.5-64.5T280 501t64.5-155.5T500 281q95 0 156 64q8 8 11.5 16.5T674 382t6 19H560z"></svg:path>`,
})
export class WebsymbolCwCircleIcon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}
