import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsHourGlassIcon],svg[zondicons-hour-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18a7 7 0 0 1 4-6.33V8.33A7 7 0 0 1 3 2H1V0h18v2h-2a7 7 0 0 1-4 6.33v3.34A7 7 0 0 1 17 18h2v2H1v-2zM5 2a5 5 0 0 0 4 4.9V10h2V6.9A5 5 0 0 0 15 2z"></svg:path>`,
})
export class ZondiconsHourGlassIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
