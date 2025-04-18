import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReward32RegularIcon],svg[fluent-reward-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6.25C5 5.56 5.56 5 6.25 5H9v7.071l-2.822-1.528A2.25 2.25 0 0 1 5 8.564zm6 6.904V5h10v8.154l-4.88 2.644a.25.25 0 0 1-.24 0zm12-1.083V5h2.75c.69 0 1.25.56 1.25 1.25v2.314a2.25 2.25 0 0 1-1.178 1.979zM6.25 3A3.25 3.25 0 0 0 3 6.25v2.314a4.25 4.25 0 0 0 2.226 3.737l7.985 4.326a6.5 6.5 0 1 0 5.577 0l7.986-4.326A4.25 4.25 0 0 0 29 8.564V6.25A3.25 3.25 0 0 0 25.75 3zm5.25 19.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0"></svg:path>`,
})
export class FluentReward32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
