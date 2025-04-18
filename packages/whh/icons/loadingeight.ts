import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLoadingeightIcon],svg[whh-loadingeight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 0q139 0 257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024t-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0"></svg:path>`,
})
export class WhhLoadingeightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
