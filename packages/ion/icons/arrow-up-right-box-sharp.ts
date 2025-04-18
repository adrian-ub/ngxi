import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowUpRightBoxSharpIcon],svg[ion-arrow-up-right-box-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M480 32v164.364h-32V86.627l-43.636 43.637v-22.628h-22.628L425.373 64H315.636V32zM193.373 296l188.363-188.364H32V480h372.364V130.264L216 318.627z" clip-rule="evenodd"></svg:path>`,
})
export class IonArrowUpRightBoxSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
