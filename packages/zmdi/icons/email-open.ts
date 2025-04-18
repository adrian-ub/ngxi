import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiEmailOpenIcon],svg[zmdi-email-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m426 155l1 213q0 18-12.5 30.5T384 411H43q-18 0-30.5-12.5T0 368V155q0-24 20-37L213 5l193 113q20 13 20 37M213 261l177-110L213 48L37 151z"></svg:path>`,
})
export class ZmdiEmailOpenIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
