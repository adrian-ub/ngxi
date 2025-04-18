import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLineOfficialAccountIcon],svg[arcticons-line-official-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.196 14.385v14.761h7.608m12.869-2.882V8.707c0-1.703-8.185-4.207-16.67-4.207S7.332 7.004 7.332 8.707l-.006 17.557c-.002 6.41 6.528 14.605 16.67 17.236c10.143-2.63 16.676-10.828 16.676-17.236"></svg:path>`,
})
export class ArcticonsLineOfficialAccountIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
