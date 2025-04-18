import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSunnySnowingFillIcon],svg[si-sunny-snowing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M1 12a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm17 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M4.929 4.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414zm15.556 1.414a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414zM7 13c0-2.762 2.238-5 5-5s5 2.238 5 5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1m-3 2a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm3 1a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m5-1a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm3 1a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H20a1 1 0 0 1-1-1m-7 2a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm4-3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm-8 0a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2z"></svg:path>`,
})
export class SiSunnySnowingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
