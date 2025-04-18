import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFindOutlineIcon],svg[lsicon-find-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 8h3m-3 4.5h4m-4-9h12m-2.479 7.021l2.066 2.066m-1.18-4.131a2.951 2.951 0 1 1-5.902 0a2.951 2.951 0 0 1 5.902 0Z"></svg:path>`,
})
export class LsiconFindOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
