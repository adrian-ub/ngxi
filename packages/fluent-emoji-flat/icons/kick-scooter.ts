import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatKickScooterIcon],svg[fluent-emoji-flat-kick-scooter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#1C1C1C" d="M8 5a1 1 0 0 0-1 1c0 .552-.027 1.459.525 1.459L8.9 7H12a1 1 0 1 0 0-2zm2 21a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m22 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path><svg:path fill="#26C9FC" d="M7.001 5.938L7 6a1 1 0 0 0 1 1h.905l-.998 9.983l5.666 6.918A3 3 0 0 0 15.894 25H26a1 1 0 0 1 0 2H15.894a5 5 0 0 1-3.868-1.832l-4.4-5.373l-.631 6.304a1 1 0 1 1-1.99-.199z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatKickScooterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
