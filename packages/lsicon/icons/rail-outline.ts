import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRailOutlineIcon],svg[lsicon-rail-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m10 7.5l3-3l-3-3l-7 7L8.5 14l4-4zm0 0H4m2 4h5m-7-2h8m-6-4h6m-4-2h4"></svg:path>`,
})
export class LsiconRailOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
