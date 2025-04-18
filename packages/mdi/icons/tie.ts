import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTieIcon],svg[mdi-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 2l4 4l-3 11l5 5l5-5l-3-11l4-4Z"></svg:path>`,
})
export class MdiTieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
