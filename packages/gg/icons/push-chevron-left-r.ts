import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronLeftRIcon],svg[gg-push-chevron-left-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.674 9.172L15.26 7.757L11.017 12l4.243 4.243l1.414-1.415L13.846 12zM9.963 8v8h-2V8z"></svg:path><svg:path fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPushChevronLeftRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
