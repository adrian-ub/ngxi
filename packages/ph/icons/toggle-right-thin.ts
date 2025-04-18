import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phToggleRightThinIcon],svg[ph-toggle-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 60H80a68 68 0 0 0 0 136h96a68 68 0 0 0 0-136m0 128H80a60 60 0 0 1 0-120h96a60 60 0 0 1 0 120m0-96a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhToggleRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
