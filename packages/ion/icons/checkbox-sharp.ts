import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionCheckboxSharpIcon],svg[ion-checkbox-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 48v416h416V48Zm170 312.38l-80.6-89.57l23.79-21.41l56 62.22L350 153.46L374.54 174Z"></svg:path>`,
})
export class IonCheckboxSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
