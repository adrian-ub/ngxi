import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiUnfoldMoreIcon],svg[zmdi-unfold-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m98 60l-68 68L0 98L98 0l98 98l-30 30zm0 264l68-68l30 30l-98 98l-98-98l30-30z"></svg:path>`,
})
export class ZmdiUnfoldMoreIcon {
  readonly viewBox = input("0 0 200 384")
  readonly width = input("0.53em")
  readonly height = input("1em")
}
