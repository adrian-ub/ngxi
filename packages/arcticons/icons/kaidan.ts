import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKaidanIcon],svg[arcticons-kaidan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.471 21.471 0 0 0 6.693 36.718a21.4 21.4 0 0 0-3.818 6.332a.995.995 0 0 0 .728 1.343C5.606 44.806 9.113 45.5 24 45.5a21.5 21.5 0 0 0 0-43m-9.5 12.851h19m-11 17.299h11m-19 0h4m-8-8.65h27"></svg:path>`,
})
export class ArcticonsKaidanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
