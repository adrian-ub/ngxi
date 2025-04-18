import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feMapIcon],svg[fe-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 17l6 1.955V7.045L9 5zM3 5l6-2l6 2l6-2v16l-6 2l-6-2l-6 2z"></svg:path>`,
})
export class FeMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
