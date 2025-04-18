import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCodeSampleIcon],svg[jam-code-sample-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.243 6.657l-4.95-4.95A1 1 0 1 1 1.707.293L7.364 5.95a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414zM9 11h8a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamCodeSampleIcon {
  readonly viewBox = input("0 0 18 14")
  readonly width = input("1.29em")
  readonly height = input("1em")
}
