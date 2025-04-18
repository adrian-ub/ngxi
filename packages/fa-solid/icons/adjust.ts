import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidAdjustIcon],svg[fa-solid-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8S8 119.033 8 256m248 184V72c101.705 0 184 82.311 184 184c0 101.705-82.311 184-184 184"></svg:path>`,
})
export class FaSolidAdjustIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
