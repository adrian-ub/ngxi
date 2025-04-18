import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAddIcon],svg[ix-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.119 65.93v168.951h168.952v42.238H277.119v168.952h-42.238V277.119H65.93v-42.238h168.951V65.93z"></svg:path>`,
})
export class IxAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
