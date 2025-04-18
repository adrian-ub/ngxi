import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPlussignIcon],svg[whh-plussign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m256-544q0-13-9.5-22.5T736 448H576V288q0-13-9.5-22.5T544 256h-64q-13 0-22.5 9.5T448 288v160H288q-13 0-22.5 9.5T256 480v64q0 13 9.5 22.5T288 576h160v160q0 13 9.5 22.5T480 768h64q13 0 22.5-9.5T576 736V576h160q13 0 22.5-9.5T768 544z"></svg:path>`,
})
export class WhhPlussignIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
