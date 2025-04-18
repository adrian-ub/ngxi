import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashAngleUpLightIcon],svg[stash-angle-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.576 10.376a.6.6 0 0 1 .848 0l2.4 2.4a.6.6 0 0 1-.848.848L12 11.648l-1.976 1.976a.6.6 0 0 1-.848-.848z"></svg:path>`,
})
export class StashAngleUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
