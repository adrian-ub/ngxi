import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconServiceOutlineIcon],svg[lsicon-service-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M14.5 12.5h-2v-4h2zm0 0c.667-3.667.3-11-6.5-11s-7.167 7.333-6.5 11m0 0h2v-4h-2zm7 2c1.31.11 3.476-.268 4.816-2m-4.816 2v-1h-1v1z"></svg:path>`,
})
export class LsiconServiceOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
