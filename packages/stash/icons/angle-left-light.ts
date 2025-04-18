import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashAngleLeftLightIcon],svg[stash-angle-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.625 9.176a.6.6 0 0 1 0 .848L11.648 12l1.976 1.976a.6.6 0 0 1-.85.848l-2.4-2.4a.6.6 0 0 1 0-.848l2.4-2.4a.6.6 0 0 1 .85 0"></svg:path>`,
})
export class StashAngleLeftLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
