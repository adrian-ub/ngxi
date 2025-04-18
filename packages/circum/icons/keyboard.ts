import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumKeyboardIcon],svg[circum-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.437 18.5H4.562a2.5 2.5 0 0 1-2.5-2.5V8a2.5 2.5 0 0 1 2.5-2.5h14.875a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5M4.562 6.5a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h14.875a1.5 1.5 0 0 0 1.5-1.5V8a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path><svg:path fill="currentColor" d="M5.548 16.5h12.9a.5.5 0 0 0 0-1h-12.9a.5.5 0 0 0 0 1"></svg:path><svg:circle cx="5.82" cy="9.248" r=".75" fill="currentColor"></svg:circle><svg:circle cx="9.94" cy="9.248" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14.06" cy="9.248" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18.18" cy="9.248" r=".75" fill="currentColor"></svg:circle><svg:circle cx="5.82" cy="12.998" r=".75" fill="currentColor"></svg:circle><svg:circle cx="9.94" cy="12.998" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14.06" cy="12.998" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18.18" cy="12.998" r=".75" fill="currentColor"></svg:circle>`,
})
export class CircumKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
