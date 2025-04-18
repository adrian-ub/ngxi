import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDensitySFilledIcon],svg[lsicon-density-s-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 4H1V3h14zm0 2H1V5h14zm0 2H1V7h14zm0 2H1V9h14zm0 2H1v-1h14z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDensitySFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
