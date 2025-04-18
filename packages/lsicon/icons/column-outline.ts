import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconColumnOutlineIcon],svg[lsicon-column-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 2v11.5h2m9.5 0h-1.5m-8 0v-10h3v10m-3 0h3m0 0h2m0 0v-6h3v6m-3 0h3"></svg:path>`,
})
export class LsiconColumnOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
