import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectAlignLeftIcon],svg[gravity-ui-object-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 14.25a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-1.5 0zM6.5 7v2a1 1 0 0 0 1 1H12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7.5a1 1 0 0 0-1 1m1-2.5A2.5 2.5 0 0 0 5 7v2a2.5 2.5 0 0 0 2.5 2.5H12A2.5 2.5 0 0 0 14.5 9V7A2.5 2.5 0 0 0 12 4.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectAlignLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
