import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAirplayIcon],svg[icon-park-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M12 35.0137H9H4V8.01273C4 6.90868 4.89543 6.01367 6 6.01367H42C43.1046 6.01367 44 6.90868 44 8.01273V35.0137H36"></svg:path><svg:path fill="#2F88FF" d="M24 32L14 42H34L24 32Z"></svg:path></svg:g>`,
})
export class IconParkAirplayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
