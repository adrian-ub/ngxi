import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPinFIcon],svg[jam-pin-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.374 12.268l-5.656 5.657A1 1 0 1 1 .303 16.51l5.657-5.656L1.718 6.61A6.99 6.99 0 0 1 7.9 4.67L11.617.954a2 2 0 0 1 2.828 0l2.829 2.828a2 2 0 0 1 0 2.829l-3.716 3.716a6.99 6.99 0 0 1-1.941 6.183z"></svg:path>`,
})
export class JamPinFIcon {
  readonly viewBox = input("-3 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
