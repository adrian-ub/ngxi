import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapEditFilledIcon],svg[tdesign-map-edit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l1 .59v-.955l4-4V5.09l-5-2.953zM22 2.5v8.97l-2.213-2.212l-3.287 3.287V4.767zm1.914 13.714l-4.127-4.128l-7.287 7.287l.001 4.127h4.127zm-6.463 1.036l1.299 1.3l-2.95 2.95h-1.3v-1.3z"></svg:path>`,
})
export class TdesignMapEditFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
