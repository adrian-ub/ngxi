import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeSvgIcon],svg[icomoon-free-svg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 6.5c-.444 0-.843.193-1.118.5h-2.968l2.099-2.099a1.5 1.5 0 1 0-1.414-1.414L9 5.586V2.618a1.5 1.5 0 1 0-2 0v2.968L4.901 3.487a1.5 1.5 0 1 0-1.414 1.414L5.586 7H2.618a1.5 1.5 0 1 0 0 2h2.968l-2.099 2.099a1.5 1.5 0 1 0 1.414 1.414L7 10.414v2.968a1.5 1.5 0 1 0 2 0v-2.968l2.099 2.099a1.5 1.5 0 1 0 1.414-1.414L10.414 9h2.968A1.5 1.5 0 1 0 14.5 6.5"></svg:path>`,
})
export class IcomoonFreeSvgIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
