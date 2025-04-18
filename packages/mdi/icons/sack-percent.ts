import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSackPercentIcon],svg[mdi-sack-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7L6 2l4 2l2-2l2 2l4-2l-2 5zm8 15H8c-6 0-5-4-5-4s1-7 5-9h8c4 2 5 9 5 9s1 4-5 4m-8.5-9.5A1.5 1.5 0 0 0 9 14a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 9 11a1.5 1.5 0 0 0-1.5 1.5m9 6A1.5 1.5 0 0 0 15 17a1.5 1.5 0 0 0-1.5 1.5A1.5 1.5 0 0 0 15 20a1.5 1.5 0 0 0 1.5-1.5m0-6.15L15.15 11L7.5 18.65L8.87 20z"></svg:path>`,
})
export class MdiSackPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
