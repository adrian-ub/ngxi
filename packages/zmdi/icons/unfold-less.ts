import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiUnfoldLessIcon],svg[zmdi-unfold-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 333l98-98l98 98l-30 30l-68-68l-68 68zM196 51l-98 98L0 51l30-30l68 68l68-68z"></svg:path>`,
})
export class ZmdiUnfoldLessIcon {
  readonly viewBox = input("0 0 200 384")
  readonly width = input("0.53em")
  readonly height = input("1em")
}
