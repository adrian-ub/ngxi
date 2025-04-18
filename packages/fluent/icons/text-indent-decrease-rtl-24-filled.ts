import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextIndentDecreaseRtl24FilledIcon],svg[fluent-text-indent-decrease-rtl-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 7a1 1 0 0 0 1 1H15l.117-.007A1 1 0 0 0 15 6H6.5l-.117.007A1 1 0 0 0 5.5 7m-2 6.001L15 13l.117-.007A1 1 0 0 0 15 11l-11.5.001l-.117.007A1 1 0 0 0 3.5 13m2 4a1 1 0 0 0 1 1H15l.117-.007A1 1 0 0 0 15 16H6.5l-.117.007A1 1 0 0 0 5.5 17m14.113-2.21a1 1 0 0 1-1.32-1.497L19.586 12l-1.293-1.293l-.083-.094a1 1 0 0 1 1.497-1.32l2 2l.083.094a1 1 0 0 1-.083 1.32l-2 2z"></svg:path>`,
})
export class FluentTextIndentDecreaseRtl24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
