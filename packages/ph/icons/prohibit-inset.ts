import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phProhibitInsetIcon],svg[ph-prohibit-inset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M165.66 154.34a8 8 0 0 1-11.32 11.32l-64-64a8 8 0 0 1 11.32-11.32ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhProhibitInsetIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
