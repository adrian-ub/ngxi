import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PentagonIcon],svg[fluent-mdl2-pentagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2042 723l-389 1197H395L6 723L1024 18zm-151 51l-867-600l-867 600l331 1018h1072z"></svg:path>`,
})
export class FluentMdl2PentagonIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
