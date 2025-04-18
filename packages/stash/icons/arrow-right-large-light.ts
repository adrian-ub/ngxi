import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashArrowRightLargeLightIcon],svg[stash-arrow-right-large-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.989 4.638a.5.5 0 0 1 .706.017l6.667 7a.5.5 0 0 1 0 .69l-6.667 7a.5.5 0 1 1-.724-.69l5.862-6.155H2a.5.5 0 0 1 0-1h18.833l-5.862-6.155a.5.5 0 0 1 .018-.707"></svg:path>`,
})
export class StashArrowRightLargeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
