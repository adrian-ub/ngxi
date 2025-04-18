import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronLeftOIcon],svg[gg-push-chevron-left-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 16H8V8h2zm5.297-8.243l1.415 1.415L13.883 12l2.829 2.828l-1.415 1.415L11.055 12z"></svg:path><svg:path fill-rule="evenodd" d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1S1 5.925 1 12m2 0a9 9 0 1 0 18 0a9 9 0 0 0-18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPushChevronLeftOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
