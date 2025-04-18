import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceAway20RegularIcon],svg[fluent-presence-away-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9.586V6.008a1 1 0 1 0-2 0V10a1 1 0 0 0 .293.707l3 3a1 1 0 1 0 1.414-1.414zm-10 .41C0 4.475 4.475 0 9.995 0s9.996 4.475 9.996 9.995s-4.475 9.996-9.996 9.996C4.475 19.99 0 15.516 0 9.995M9.995 2a7.995 7.995 0 1 0 0 15.99a7.995 7.995 0 0 0 0-15.99"></svg:path>`,
})
export class FluentPresenceAway20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
