import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxFirstAidIcon],svg[bx-first-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2M9 4h6v2H9zM4 18V8h16l.001 10z"></svg:path><svg:path fill="currentColor" d="M13 9h-2v3H8v2h3v3h2v-3h3v-2h-3z"></svg:path>`,
})
export class BxFirstAidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
