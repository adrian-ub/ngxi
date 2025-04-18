import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDensityLFilledIcon],svg[lsicon-density-l-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 3h14v4H1zm0 6h14v4H1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDensityLFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
