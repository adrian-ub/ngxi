import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTextIcon],svg[ix-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.44 85.333v64h-32L362.773 128H277.44v256l42.666 10.666v32h-128v-32L234.773 384V128H149.44l-10.667 21.333h-32v-64z"></svg:path>`,
})
export class IxTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
