import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riForwardEndMiniFillIcon],svg[ri-forward-end-mini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1M2.5 17.535a.5.5 0 0 0 .288-.092l7.133-5.035a.5.5 0 0 0 0-.817L2.788 6.556A.5.5 0 0 0 2 6.965v10.07a.5.5 0 0 0 .5.5m8.592-10.858a.5.5 0 0 0-.092.288v10.07a.5.5 0 0 0 .788.408l7.133-5.035a.5.5 0 0 0 0-.817l-7.133-5.035a.5.5 0 0 0-.697.12"></svg:path>`,
})
export class RiForwardEndMiniFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
