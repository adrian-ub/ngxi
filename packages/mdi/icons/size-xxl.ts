import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSizeXxlIcon],svg[mdi-size-xxl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2l1 2.5L13 7h2l-2 5l2 5h-2l-1-2.5l-1 2.5H9l2-5zm7 0h2v8h4v2h-6zM2 7h2l1 2.5L6 7h2l-2 5l2 5H6l-1-2.5L4 17H2l2-5z"></svg:path>`,
})
export class MdiSizeXxlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
