import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectAlignJustifyHorizontalIcon],svg[gravity-ui-object-align-justify-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.25 15a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0v12.5a.75.75 0 0 1-.75.75M11 9V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1m1.5-2A2.5 2.5 0 0 0 10 4.5H6A2.5 2.5 0 0 0 3.5 7v2A2.5 2.5 0 0 0 6 11.5h4A2.5 2.5 0 0 0 12.5 9zM1 14.25a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectAlignJustifyHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
