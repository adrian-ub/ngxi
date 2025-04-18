import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronRightOIcon],svg[gg-push-chevron-right-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 8h2v8h-2zm-5.297 8.243l-1.415-1.414L10.117 12L7.288 9.172l1.415-1.415L12.945 12z"></svg:path><svg:path fill-rule="evenodd" d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11s11-4.925 11-11m-2 0a9 9 0 1 0-18 0a9 9 0 0 0 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPushChevronRightOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
