import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsSolidityIcon],svg[file-icons-solidity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82.26 292.547L0 146.302L82.26 0h164.574L330 146.302H164.518zM330 365.697l-82.369-146.244l-82.26 146.245H0L83.056 512H247.63z"></svg:path>`,
})
export class FileIconsSolidityIcon {
  readonly viewBox = input("0 0 330 512")
  readonly width = input("0.65em")
  readonly height = input("1em")
}
