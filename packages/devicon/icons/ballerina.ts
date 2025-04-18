import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconBallerinaIcon],svg[devicon-ballerina-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#46C0BC" d="M29 35.926V0h30.082v47.43zm0 26.994l20.59-7.873L29 47.173zm0 11.247V128h15.458l14.624-47.936v-17.4zm70.587-38.241V0H69.506v47.43zm0 11.246l-20.589 7.875l20.59 7.873zM69.506 62.664v17.4L84.129 128h15.458V74.167z"></svg:path>`,
})
export class DeviconBallerinaIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
