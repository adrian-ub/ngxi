import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsStackIcon],svg[game-icons-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 18.365L50.14 136L256 253.635L461.86 136zm-154 168L50.14 216L256 333.635L461.86 216L410 186.365l-154 88zm0 80L50.14 296L256 413.635L461.86 296L410 266.365l-154 88zm0 80L50.14 376L256 493.635L461.86 376L410 346.365l-154 88z"></svg:path>`,
})
export class GameIconsStackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
