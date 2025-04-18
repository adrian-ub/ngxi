import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectAlignJustifyVerticalIcon],svg[gravity-ui-object-align-justify-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 14.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75M7 11h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1m2 1.5a2.5 2.5 0 0 0 2.5-2.5V6A2.5 2.5 0 0 0 9 3.5H7A2.5 2.5 0 0 0 4.5 6v4A2.5 2.5 0 0 0 7 12.5zM1.75 1a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectAlignJustifyVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
