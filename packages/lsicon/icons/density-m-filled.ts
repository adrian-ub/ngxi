import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDensityMFilledIcon],svg[lsicon-density-m-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 2h14v3H1zm0 4h14v3H1zm0 4h14v3H1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDensityMFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
