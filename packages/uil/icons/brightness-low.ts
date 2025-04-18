import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBrightnessLowIcon],svg[uil-brightness-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11a1 1 0 1 0 1 1a1 1 0 0 0-1-1m1.93 6.66a1 1 0 1 0 1.41 0a1 1 0 0 0-1.41 0M6.34 6.34a1 1 0 1 0-1.41 0a1 1 0 0 0 1.41 0M12 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1m5.66 13.66a1 1 0 1 0 1.41 0a1 1 0 0 0-1.41 0M21 11a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-3.34-6.07a1 1 0 1 0 1.41 0a1 1 0 0 0-1.41 0M12 20a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-14a6 6 0 1 0 6 6a6 6 0 0 0-6-6m0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4"></svg:path>`,
})
export class UilBrightnessLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
