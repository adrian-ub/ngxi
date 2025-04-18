import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoinFlipIcon],svg[arcticons-coin-flip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.938 35.5a8.33 8.33 0 0 1-.883-5.223s-3.53-1.36-4.119-2.096s.441-1.802.368-4.046"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.444 22.995c.478.98-2.207 1.324-2.39.147s2.06-2.427 2.17-3.751s1.688-7.503 8.275-6.842c7.687.773 6.804 8.607 6.694 10.041a2.911 2.911 0 0 1-1.545 4.819a8.2 8.2 0 0 0 .037 4.634"></svg:path>`,
})
export class ArcticonsCoinFlipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
