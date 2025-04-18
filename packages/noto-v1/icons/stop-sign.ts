import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1StopSignIcon],svg[noto-v1-stop-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#db4437" d="M36.66 122.85L5.65 91.84a8 8 0 0 1-2.34-5.66V42.33c0-2.12.84-4.16 2.34-5.66l31.01-31c1.5-1.5 3.54-2.34 5.66-2.34h43.85c2.12 0 4.16.84 5.66 2.34l31.01 31.01c1.5 1.5 2.34 3.54 2.34 5.66v43.85c0 2.12-.84 4.16-2.34 5.66l-31.01 31.01a8 8 0 0 1-5.66 2.34H42.32a8.04 8.04 0 0 1-5.66-2.35"></svg:path>`,
})
export class NotoV1StopSignIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
