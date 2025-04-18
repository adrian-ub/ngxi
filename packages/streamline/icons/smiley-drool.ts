import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyDroolIcon],svg[streamline-smiley-drool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 9.95v1.8a1.25 1.25 0 0 1-2.5 0V11c.481-.481 1.537-1.05 2.5-1.05"></svg:path><svg:path d="M3.5 7.5A3.5 3.5 0 0 0 7 11v.75a1.25 1.25 0 1 0 2.5 0v-1.8c.619-.632 1-1.496 1-2.45z"></svg:path><svg:path d="M12.124 11A6.5 6.5 0 1 0 5 13.187"></svg:path><svg:path d="M3.797 5.377c.092-.179.38-.497.713-.69s.753-.282.954-.272m3.072-.002c.201-.01.62.08.954.273c.333.192.621.51.713.69"></svg:path></svg:g>`,
})
export class StreamlineSmileyDroolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
