import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnDownUp48FilledIcon],svg[fluent-arrow-turn-down-up-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38.866 6.88a1.5 1.5 0 0 0-1.943-.764l-12 5a1.5 1.5 0 0 0 1.154 2.769l8.781-3.659l-11.822 28.137L10.893 7.944a1.5 1.5 0 1 0-2.786 1.112L20.702 40.61c.83 2.078 3.76 2.104 4.627.042l12.293-29.258l3.513 7.728a1.5 1.5 0 0 0 2.73-1.241z"></svg:path>`,
})
export class FluentArrowTurnDownUp48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
