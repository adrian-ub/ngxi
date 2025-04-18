import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsWgetIcon],svg[file-icons-wget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M477 30H36C15.498 30 0 45.498 0 66v378c0 20.503 15.497 38 36 38h439c20.503 0 37-17.497 37-38V66c0-20.503-14.497-36-35-36M285.834 244.425l49.182 43.516v-132.5h40v132.501l49.182-43.516l26.506 29.957l-95.688 84.665l-95.688-84.666zM97.185 281.127l-28.284-28.285l70.834-70.832l-70.834-70.836L97.185 82.89l99.119 99.119zM459 433H252v-40h207z"></svg:path>`,
})
export class FileIconsWgetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
