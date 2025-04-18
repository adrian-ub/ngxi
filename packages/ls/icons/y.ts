import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsYIcon],svg[ls-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249 494l169-366h78L149 881H69l140-301L0 128h79z"></svg:path>`,
})
export class LsYIcon {
  readonly viewBox = input("0 0 496 881")
  readonly width = input("0.57em")
  readonly height = input("1em")
}
