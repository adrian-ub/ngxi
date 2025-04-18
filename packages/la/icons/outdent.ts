import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laOutdentIcon],svg[la-outdent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v2h13V7zm0 4v2h20v-2zm22 0v10l5-5zM3 15v2h20v-2zm0 4v2h20v-2zm0 4v2h13v-2z"></svg:path>`,
})
export class LaOutdentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
