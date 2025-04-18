import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRowCollapseIcon],svg[carbon-row-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 20H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m0 6H6v-4h20zM17 7.828l2.586 2.586L21 9l-5-5l-5 5l1.414 1.414L15 7.828V14H4v2h24v-2H17z"></svg:path>`,
})
export class CarbonRowCollapseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
