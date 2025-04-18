import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiWallFuzoHIcon],svg[cbi-wall-fuzo-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.641 2L2.385 6.359V20.2l9.487 1.8l9.743-2.308V6.872l-.769-.513l-2.308.769v2.051l-4.871-2.051V2.513Zm1.026 12.308l4.871 1.538v3.333h-.256l-5.641 1.283L7 19.436l6.667-1.8Z"></svg:path>`,
})
export class CbiWallFuzoHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
