import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSunriseIcon],svg[mynaui-sunrise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.5 17.5a3.5 3.5 0 1 0-7 0M11.9 3v7m-6.002 1.398l1.278 1.278M3 17.4h1.8m14.2 0h1.8m-4.176-4.724l1.278-1.278M21 21H3M8.3 6.6L11.9 3l3.6 3.6"></svg:path>`,
})
export class MynauiSunriseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
