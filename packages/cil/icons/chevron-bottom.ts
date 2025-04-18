import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilChevronBottomIcon],svg[cil-chevron-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256.072 424l-11.421-11.313l-85.808-85.809l.053-.054L16 183.928l97.122-97.122l142.9 142.9l142.9-142.9l97.122 97.122l-142.801 142.794l-11.361 11.469Zm-.107-45.254l.054.053l51.835-51.835l11.346-11.453l131.583-131.583l-51.868-51.868l-142.9 142.9l-142.9-142.9l-51.861 51.868l142.9 142.9l-.053.054Z"></svg:path>`,
})
export class CilChevronBottomIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
