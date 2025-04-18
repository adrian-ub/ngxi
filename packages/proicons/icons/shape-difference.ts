import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsShapeDifferenceIcon],svg[proicons-shape-difference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M1.998 5.75A3.75 3.75 0 0 1 5.748 2h7a3.75 3.75 0 0 1 3.75 3.75V7.5h-5.246a3.75 3.75 0 0 0-3.75 3.75v5.25H5.748a3.75 3.75 0 0 1-3.75-3.75z"></svg:path><svg:path d="M7.502 16.5h5.246a3.75 3.75 0 0 0 3.75-3.75V7.5h1.754a3.75 3.75 0 0 1 3.75 3.75v7a3.75 3.75 0 0 1-3.75 3.75h-7a3.75 3.75 0 0 1-3.75-3.75z"></svg:path></svg:g>`,
})
export class ProiconsShapeDifferenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
