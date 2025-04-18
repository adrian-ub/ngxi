import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faHeartIcon],svg[fa-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1536q-26 0-44-18L228 916q-10-8-27.5-26T145 824.5T77 727T23.5 606T0 468q0-220 127-344T478 0q62 0 126.5 21.5t120 58T820 148t76 68q36-36 76-68t95.5-68.5t120-58T1314 0q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18"></svg:path>`,
})
export class FaHeartIcon {
  readonly viewBox = input("0 0 1792 1536")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
