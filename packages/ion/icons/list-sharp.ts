import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionListSharpIcon],svg[ion-list-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="48" d="M144 144h320M144 256h320M144 368h320"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M64 128h32v32H64zm0 112h32v32H64zm0 112h32v32H64z"></svg:path>`,
})
export class IonListSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
