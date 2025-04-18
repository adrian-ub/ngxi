import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosBuildkiteIconIcon],svg[logos-buildkite-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#30F2A2" d="m0 0l85.333 41.813v85.334L0 85.333zm171.52 0L256 41.813l-84.48 43.52z"></svg:path><svg:path fill="#14CC80" d="M171.52 0L85.333 41.813v85.334l86.187-41.814zM256 41.813l-84.48 43.52v85.334l84.48-43.52z"></svg:path>`,
})
export class LogosBuildkiteIconIcon {
  readonly viewBox = input("0 0 256 171")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
