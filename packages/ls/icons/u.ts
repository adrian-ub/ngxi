import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsUIcon],svg[ls-u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M394 654v-47c-42 40-110 64-172 64s-108-24-150-64C28 564 0 505 0 439V128h72v315c2 87 63 157 150 157c88 0 169-70 172-157V128h72v526z"></svg:path>`,
})
export class LsUIcon {
  readonly viewBox = input("0 0 466 671")
  readonly width = input("0.7em")
  readonly height = input("1em")
}
