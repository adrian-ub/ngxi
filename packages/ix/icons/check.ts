import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCheckIcon],svg[ix-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M237.866 438.827L48.853 249.814l30.293-30.294l152.32 152.32L430.293 73.387l35.413 23.68z"></svg:path>`,
})
export class IxCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
