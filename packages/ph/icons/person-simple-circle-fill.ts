import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleCircleFillIcon],svg[ph-person-simple-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 40a16 16 0 1 1-16 16a16 16 0 0 1 16-16m48 56h-40v13.58l30.66 46a8 8 0 0 1-13.32 8.88l-25.34-38l-25.34 38a8 8 0 1 1-13.32-8.88l30.66-46V120H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhPersonSimpleCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
