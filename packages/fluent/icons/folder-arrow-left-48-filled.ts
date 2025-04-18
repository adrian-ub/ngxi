import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFolderArrowLeft48FilledIcon],svg[fluent-folder-arrow-left-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12.25A6.25 6.25 0 0 1 10.25 6h6.465a3.75 3.75 0 0 1 2.651 1.098l3.384 3.384l-5.152 5.152a1.25 1.25 0 0 1-.883.366H4zm0 6.25v16.25A6.25 6.25 0 0 0 10.25 41h13.794A12.94 12.94 0 0 1 22 34c0-7.18 5.82-13 13-13c3.493 0 6.664 1.378 9 3.62v-7.37A6.25 6.25 0 0 0 37.75 11H25.768l-6.402 6.402a3.75 3.75 0 0 1-2.651 1.098zM35 45c-6.075 0-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11s-4.925 11-11 11m8-11a1 1 0 0 0-1-1H30.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L30.414 35H42a1 1 0 0 0 1-1"></svg:path>`,
})
export class FluentFolderArrowLeft48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
