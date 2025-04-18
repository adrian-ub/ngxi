import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBarOutlineIcon],svg[lsicon-bar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 2v1.5m11.5 10H2.5v-2m0 0h6v-3h-6m0 3v-3m0 0v-2m0 0h10v-3h-10m0 3v-3"></svg:path>`,
})
export class LsiconBarOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
