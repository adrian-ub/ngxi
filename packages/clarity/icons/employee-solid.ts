import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityEmployeeSolidIcon],svg[clarity-employee-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16.86" cy="9.73" r="6.46" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M21 28h7v1.4h-7z"></svg:path><svg:path fill="currentColor" d="M15 30v3a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V23a1 1 0 0 0-1-1h-7v-1.47a1 1 0 0 0-2 0V22h-2v-3.58a32 32 0 0 0-5.14-.42a26 26 0 0 0-11 2.39a3.28 3.28 0 0 0-1.88 3V30Zm17 2H17v-8h7v.42a1 1 0 0 0 2 0V24h6Z"></svg:path>`,
})
export class ClarityEmployeeSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
