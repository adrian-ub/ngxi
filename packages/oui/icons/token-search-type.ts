import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenSearchTypeIcon],svg[oui-token-search-type-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.27 7.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m2.5 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.702 10.682a4.5 4.5 0 0 1-5.796.482L4.28 12.789a.75.75 0 0 1-1.06-1.06L4.847 10.1a4.501 4.501 0 1 1 6.855.581m-5.304-1.06a3 3 0 1 0 4.243-4.243A3 3 0 0 0 6.398 9.62" clip-rule="evenodd"></svg:path>`,
})
export class OuiTokenSearchTypeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
