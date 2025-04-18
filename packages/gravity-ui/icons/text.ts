import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiTextIcon],svg[gravity-ui-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.279 2.544A.75.75 0 0 1 4 2h8a.75.75 0 0 1 .721.544l.5 1.75a.75.75 0 1 1-1.442.412L11.434 3.5H8.75l-.004 9H9.5a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.746l.004-9H4.566L4.22 4.706a.75.75 0 1 1-1.442-.412z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTextIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
