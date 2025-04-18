import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowDownRightBoxSharpIcon],svg[ion-arrow-down-right-box-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M480 480H315.636v-32h109.737l-43.637-43.636h22.628v-22.628L448 425.372V315.636h32zM216 193.372l188.364 188.364V32H32v372.364h349.736L193.373 216z" clip-rule="evenodd"></svg:path>`,
})
export class IonArrowDownRightBoxSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
