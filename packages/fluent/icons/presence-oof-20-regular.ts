import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceOof20RegularIcon],svg[fluent-presence-oof-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.698 7.702a1 1 0 1 0-1.416-1.413l-2.995 3a1 1 0 0 0 0 1.413l2.995 3a1 1 0 1 0 1.415-1.413l-1.29-1.294h3.598a1 1 0 1 0 0-2H9.406zM9.995 0C4.475 0 0 4.475 0 9.995s4.475 9.996 9.995 9.996s9.996-4.475 9.996-9.996C19.99 4.475 15.516 0 9.995 0M2 9.995a7.995 7.995 0 1 1 15.99 0a7.995 7.995 0 0 1-15.99 0"></svg:path>`,
})
export class FluentPresenceOof20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
