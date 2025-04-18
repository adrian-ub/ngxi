import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phProhibitInsetFillIcon],svg[ph-prohibit-inset-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m37.66 141.66a8 8 0 0 1-11.32 0l-64-64a8 8 0 0 1 11.32-11.32l64 64a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhProhibitInsetFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
