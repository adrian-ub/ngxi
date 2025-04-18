import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDismissCircle16Icon],svg[fluent-color-dismiss-circle-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDismissCircle160)" d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2"></svg:path><svg:path fill="url(#fluentColorDismissCircle161)" d="M5.896 5.896a.5.5 0 0 1 .638-.057l.07.057L8 7.293l1.396-1.397a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L8.707 8l1.397 1.396a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L8 8.707l-1.396 1.397a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L7.293 8L5.896 6.604a.5.5 0 0 1-.057-.638z"></svg:path><svg:defs><svg:lineargradient id="fluentColorDismissCircle160" x1="3.875" x2="13" y1="2.75" y2="16" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F83F54"></svg:stop><svg:stop offset="1" stop-color="#CA2134"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDismissCircle161" x1="6.011" x2="8.354" y1="8.199" y2="10.635" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#FECBE6"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDismissCircle16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
