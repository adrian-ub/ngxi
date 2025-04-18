import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiShuffleIcon],svg[mynaui-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.5 4h4.412v4.444M4 20L19 5m1 10.5V20h-4.5M14 14l5.294 5.333M4 4l6 6"></svg:path>`,
})
export class MynauiShuffleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
