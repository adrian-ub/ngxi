import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDam7FilledIcon],svg[tdesign-dam-7-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.22 1h11.56l1 4H21v15h1v2h-5.5v-9h-9v9H2v-2h1V5h2.22zm1.06 4h9.44l-.5-2H7.78z"></svg:path><svg:path fill="currentColor" d="M9.5 22v-7h5v7z"></svg:path>`,
})
export class TdesignDam7FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
