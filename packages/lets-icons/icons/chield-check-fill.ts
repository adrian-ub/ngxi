import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldCheckFillIcon],svg[lets-icons-chield-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m18.394 5.74l-5.212-2.234a3 3 0 0 0-2.364 0L5.606 5.74A1 1 0 0 0 5 6.66v5.252a6 6 0 0 0 2.513 4.882l3.325 2.375a2 2 0 0 0 2.325 0l3.324-2.375A6 6 0 0 0 19 11.913V6.66a1 1 0 0 0-.606-.919M15.78 9.625a1 1 0 1 0-1.562-1.25l-3.302 4.128l-1.21-1.21a1 1 0 0 0-1.414 1.414l1.605 1.605a1.5 1.5 0 0 0 2.232-.123z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsChieldCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
