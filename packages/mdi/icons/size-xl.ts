import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSizeXlIcon],svg[mdi-size-xl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7h2l1 2.5L10 7h2l-2 5l2 5h-2l-1-2.5L8 17H6l2-5zm7 0h2v8h4v2h-6z"></svg:path>`,
})
export class MdiSizeXlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
