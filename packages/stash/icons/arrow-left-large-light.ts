import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashArrowLeftLargeLightIcon],svg[stash-arrow-left-large-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.011 4.638a.5.5 0 0 1 .018.707L3.167 11.5H22a.5.5 0 0 1 0 1H3.167l5.862 6.155a.5.5 0 1 1-.724.69l-6.667-7a.5.5 0 0 1 0-.69l6.667-7a.5.5 0 0 1 .706-.017"></svg:path>`,
})
export class StashArrowLeftLargeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
