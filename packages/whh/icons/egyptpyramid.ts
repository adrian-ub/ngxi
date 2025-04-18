import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhEgyptpyramidIcon],svg[whh-egyptpyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 384L672 160l96-96l256 320zM0 640L480 0l480 640z"></svg:path>`,
})
export class WhhEgyptpyramidIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}
