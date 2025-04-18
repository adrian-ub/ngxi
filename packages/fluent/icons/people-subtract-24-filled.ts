import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleSubtract24FilledIcon],svg[fluent-people-subtract-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m8 1a3 3 0 1 1-6 0a3 3 0 0 1 6 0M2 15.25A2.25 2.25 0 0 1 4.25 13h7.5c.316 0 .617.065.89.183A6.48 6.48 0 0 0 11 17.5a6.5 6.5 0 0 0 .278 1.887C10.458 19.76 9.39 20 8 20c-6 0-6-4.5-6-4.5zM17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m2.997 6a.5.5 0 0 0 0-1h-6.001a.5.5 0 0 0 0 1z"></svg:path>`,
})
export class FluentPeopleSubtract24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
