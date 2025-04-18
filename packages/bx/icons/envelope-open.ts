import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxEnvelopeOpenIcon],svg[bx-envelope-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.555 8.168l-9-6a1 1 0 0 0-1.109 0l-9 6A1 1 0 0 0 2 9v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-.334-.167-.646-.445-.832M12 4.202L19.197 9L12 13.798L4.803 9zM4 20v-9.131l7.445 4.963a1 1 0 0 0 1.11 0L20 10.869L19.997 20z"></svg:path>`,
})
export class BxEnvelopeOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
