import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderOpenFillIcon],svg[gravity-ui-folder-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7 3h4a3 3 0 0 1 3 3H5.449a3 3 0 0 0-2.573 1.457L1.43 9.867a.75.75 0 0 0 1.287.772l1.446-2.41A1.5 1.5 0 0 1 5.45 7.5h9.376a1.175 1.175 0 0 1 1.008 1.779l-1.96 3.265A3 3 0 0 1 11.302 14H2.94q-.179 0-.35-.028A3 3 0 0 1 0 11z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderOpenFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
