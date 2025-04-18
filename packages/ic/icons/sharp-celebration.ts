import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCelebrationIcon],svg[ic-sharp-celebration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 22l14-5l-9-9zm12.53-9.47L21 6.05l1.48 1.48l1.06-1.06L21 3.93l-7.53 7.53zM10.94 6L9.47 7.47l1.06 1.06l2.54-2.54l-2.54-2.53l-1.06 1.07zm8.03 3.97l-3.5 3.5l1.06 1.06L19 12.06l2.5 2.49l1.06-1.06z"></svg:path><svg:path fill="currentColor" d="m15.97 4.97l-4.5 4.5l1.06 1.06L18.07 5l-3.53-3.53l-1.06 1.06z"></svg:path>`,
})
export class IcSharpCelebrationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
