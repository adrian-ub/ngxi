import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceCablecarIcon],svg[guidance-cablecar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 8.5V4.275M23.5 2s-9.609 3-23 3m21 10.863s-4.398-.75-9.5-.75s-9.5.75-9.5.75m6-7.363v6.722m7-6.722v6.722M14.5 2q-.959.148-2 .285m-1 .126q-.97.117-2 .219m12 5.87h-19v14h19z"></svg:path>`,
})
export class GuidanceCablecarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
