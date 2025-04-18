import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSlackIcon],svg[gg-slack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 10a2 2 0 1 0 4 0V5a2 2 0 1 0-4 0zM5 8a2 2 0 1 0 0 4h5a2 2 0 1 0 0-4zm10 5a2 2 0 1 0 0 4h5a2 2 0 1 0 0-4zm-5 9a2 2 0 0 1-2-2v-5a2 2 0 1 1 4 0v5a2 2 0 0 1-2 2M8 5a2 2 0 1 1 4 0v2h-2a2 2 0 0 1-2-2M3 15a2 2 0 1 0 4 0v-2H5a2 2 0 0 0-2 2m14 5a2 2 0 1 1-4 0v-2h2a2 2 0 0 1 2 2m5-10a2 2 0 1 0-4 0v2h2a2 2 0 0 0 2-2" clip-rule="evenodd"></svg:path>`,
})
export class GgSlackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
