import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDiamondOutlineIcon],svg[carbon-diamond-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.39 14.527L17.474 2.609C17.067 2.203 16.533 2 16 2s-1.067.203-1.473.61L2.609 14.526C2.203 14.933 2 15.467 2 16s.203 1.067.61 1.473l11.917 11.918c.406.406.94.609 1.473.609s1.067-.203 1.473-.61l11.918-11.917c.406-.406.609-.94.609-1.473s-.203-1.067-.61-1.473M16 28.036L3.965 16L16 3.964L28.036 16z"></svg:path>`,
})
export class CarbonDiamondOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
