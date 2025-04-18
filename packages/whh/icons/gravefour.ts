import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhGravefourIcon],svg[whh-gravefour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1024H0q0-47 56.5-87.5T210 869l-82-549q0-30 82.5-109T387 66T512 0t125 66t176.5 145T896 320l-82 549q97 27 153.5 67.5t56.5 87.5"></svg:path>`,
})
export class WhhGravefourIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
