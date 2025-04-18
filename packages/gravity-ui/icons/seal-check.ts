import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiSealCheckIcon],svg[gravity-ui-seal-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiSealCheck0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M5.515 3.5h.621l.44-.44l1.07-1.07a.5.5 0 0 1 .708 0l1.07 1.07l.44.44H12a.5.5 0 0 1 .5.5v2.136l.44.44l1.07 1.07a.5.5 0 0 1 0 .708l-1.07 1.07l-.44.44V12a.5.5 0 0 1-.5.5H9.864l-.44.44l-1.07 1.07a.5.5 0 0 1-.708 0l-1.07-1.07l-.44-.44H4a.5.5 0 0 1-.5-.5V9.864l-.44-.44l-1.07-1.07a.5.5 0 0 1 0-.708l1.07-1.07l.44-.44V4a.5.5 0 0 1 .5-.5zm3.9-2.571a2 2 0 0 0-2.83 0L5.516 2H4a2 2 0 0 0-2 2v1.515L.929 6.585a2 2 0 0 0 0 2.83L2 10.484V12a2 2 0 0 0 2 2h1.515l1.07 1.071a2 2 0 0 0 2.83 0L10.484 14H12a2 2 0 0 0 2-2v-1.515l1.071-1.07a2 2 0 0 0 0-2.83L14 5.516V4a2 2 0 0 0-2-2h-1.515zM11.1 6.45a.75.75 0 1 0-1.2-.9L7.419 8.858L6.03 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.13-.08z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiSealCheck0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiSealCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
