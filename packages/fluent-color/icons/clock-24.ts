import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorClock24Icon],svg[fluent-color-clock-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorClock240)" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"></svg:path><svg:path fill="url(#fluentColorClock241)" d="M11.993 6.648a.75.75 0 0 0-1.493.102v6l.007.102a.75.75 0 0 0 .743.648h4l.102-.007A.75.75 0 0 0 15.25 12H12V6.75z"></svg:path><svg:defs><svg:lineargradient id="fluentColorClock240" x1="5.333" x2="15.333" y1=".889" y2="23.111" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1EC8B0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorClock241" x1="10.981" x2="9.01" y1="7.148" y2="13.094" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#D1D1FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorClock24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
