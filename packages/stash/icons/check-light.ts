import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCheckLightIcon],svg[stash-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.345 8.138a.5.5 0 0 1 .017.707l-6.667 7a.5.5 0 0 1-.724 0l-3.333-3.5a.5.5 0 1 1 .724-.69l2.971 3.12l6.305-6.62a.5.5 0 0 1 .707-.017"></svg:path>`,
})
export class StashCheckLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
