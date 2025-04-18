import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconViewOutlineIcon],svg[lsicon-view-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width=".929"><svg:path d="M8 3.895C12.447 3.895 14.5 8 14.5 8s-2.053 4.105-6.5 4.105S1.5 8 1.5 8S3.553 3.895 8 3.895Z"></svg:path><svg:path d="M9.94 8a2 2 0 1 1-3.999 0a2 2 0 0 1 4 0Z"></svg:path></svg:g>`,
})
export class LsiconViewOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
