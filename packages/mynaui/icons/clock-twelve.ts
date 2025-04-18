import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiClockTwelveIcon],svg[mynaui-clock-twelve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m9 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path>`,
})
export class MynauiClockTwelveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
