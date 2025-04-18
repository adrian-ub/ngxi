import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhWrenchaltIcon],svg[whh-wrenchalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M257 512q57 0 122-37l169 168l1 1q-37 66-37 123q0 104 76 179t180 78v-40l-82-77q-46-45-46-110t46-111t111-46t110 46l77 82h40q-3-104-78-180t-179-76q-57 0-123 37L476 381l-1-1q37-66 37-123q0-104-76-179T256 0v40l82 77q46 45 46 110t-46 111t-111 46t-110-46l-77-82H0q3 104 78 180t179 76"></svg:path>`,
})
export class WhhWrenchaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
