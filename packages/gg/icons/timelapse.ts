import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggTimelapseIcon],svg[gg-timelapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 19a6.98 6.98 0 0 1-4.95-2.05L12 12V5a7 7 0 1 1 0 14"></svg:path><svg:path fill-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgTimelapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
