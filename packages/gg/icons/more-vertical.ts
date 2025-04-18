import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMoreVerticalIcon],svg[gg-more-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3-17a3 3 0 1 1-6 0a3 3 0 0 1 6 0m0 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-3 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path>`,
})
export class GgMoreVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
