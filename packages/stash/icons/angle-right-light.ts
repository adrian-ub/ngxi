import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashAngleRightLightIcon],svg[stash-angle-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.376 9.176a.6.6 0 0 1 .849 0l2.4 2.4a.6.6 0 0 1 0 .848l-2.4 2.4a.6.6 0 0 1-.85-.848L12.353 12l-1.976-1.976a.6.6 0 0 1 0-.848"></svg:path>`,
})
export class StashAngleRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
