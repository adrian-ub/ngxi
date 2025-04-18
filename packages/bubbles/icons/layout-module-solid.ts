import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesLayoutModuleSolidIcon],svg[bubbles-layout-module-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.167.165H4.5v4.333H.167zm0 5.666H4.5v4.333H.167zm0 5.667H4.5v4.333H.167zM5.833.165h4.334v4.333H5.833zm0 5.666h4.334v4.333H5.833zm0 5.667h4.334v4.333H5.833zM11.5.165h4.333v4.333H11.5zm0 5.666h4.333v4.333H11.5zm0 5.667h4.333v4.333H11.5z"></svg:path>`,
})
export class BubblesLayoutModuleSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
