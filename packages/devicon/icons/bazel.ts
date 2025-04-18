import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconBazelIcon],svg[devicon-bazel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#76d275" d="m32 0l32 32l-32 32L0 32Z"></svg:path><svg:path fill="#43a047" d="M0 32v32l32 32V64Z"></svg:path><svg:path fill="#76d275" d="m96 0l32 32l-32 32l-32-32Z"></svg:path><svg:path fill="#43a047" d="M128 32v32L96 96V64Zm-64 0l32 32l-32 32l-32-32Z"></svg:path><svg:path fill="#00701a" d="M64 96v32L32 96V64Z"></svg:path><svg:path fill="#004300" d="m64 96l32-32v32l-32 32Z"></svg:path>`,
})
export class DeviconBazelIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
