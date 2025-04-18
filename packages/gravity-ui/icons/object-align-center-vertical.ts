import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectAlignCenterVerticalIcon],svg[gravity-ui-object-align-center-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 3h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1M4.5 4A2.5 2.5 0 0 1 7 1.5h2A2.5 2.5 0 0 1 11.5 4v3.25h2.75a.75.75 0 0 1 0 1.5H11.5V12A2.5 2.5 0 0 1 9 14.5H7A2.5 2.5 0 0 1 4.5 12V8.75H1.75a.75.75 0 0 1 0-1.5H4.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectAlignCenterVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
