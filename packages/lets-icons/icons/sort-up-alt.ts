import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSortUpAltIcon],svg[lets-icons-sort-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M4.5 7.5h10m-10 4h7m-7 4h5"></svg:path><svg:path stroke-linejoin="round" d="m17.5 9.5l2 2m-2-2l-2 2m2-2v6"></svg:path></svg:g>`,
})
export class LetsIconsSortUpAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
