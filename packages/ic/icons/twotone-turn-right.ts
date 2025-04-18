import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneTurnRightIcon],svg[ic-twotone-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.17 11l-1.59 1.59L17 14l4-4l-4-4l-1.41 1.41L17.17 9H9c-1.1 0-2 .9-2 2v9h2v-9z"></svg:path>`,
})
export class IcTwotoneTurnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
