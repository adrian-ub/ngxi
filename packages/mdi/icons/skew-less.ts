import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSkewLessIcon],svg[mdi-skew-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.5 11l-2.09 9H10.5l2.09-9zM20 9h-9L8 22h9zM4 6l4-4v3h8v2H8v3z"></svg:path>`,
})
export class MdiSkewLessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
