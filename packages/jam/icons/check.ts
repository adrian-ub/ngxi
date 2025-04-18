import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCheckIcon],svg[jam-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.486 9.73a1 1 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a1 1 0 0 1-.707.292"></svg:path>`,
})
export class JamCheckIcon {
  readonly viewBox = input("-5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
