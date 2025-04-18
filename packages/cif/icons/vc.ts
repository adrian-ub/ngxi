import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifVcIcon],svg[cif-vc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#0072C6" d="M.5.5h80v200H.5z"></svg:path><svg:path fill="#FCD116" d="M75.5.5h225v200h-225z"></svg:path><svg:path fill="#009E60" d="M225.5.5h75v200h-75zm-91.666 141.667L150.5 175.5l16.667-33.333l-16.667-33.334zM113 100.5l16.667 33.333l16.667-33.333l-16.667-33.333zm41.667 0l16.667 33.333L188 100.5l-16.667-33.333z"></svg:path></svg:g>`,
})
export class CifVcIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
