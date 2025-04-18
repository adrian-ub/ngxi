import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeCircleDownIcon],svg[icomoon-free-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0M1.5 8a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0"></svg:path><svg:path fill="currentColor" d="M4.957 5.543L3.543 6.957L8 11.414l4.457-4.457l-1.414-1.414L8 8.586z"></svg:path>`,
})
export class IcomoonFreeCircleDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
