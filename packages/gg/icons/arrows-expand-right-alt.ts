import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExpandRightAltIcon],svg[gg-arrows-expand-right-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.9 2.1v2h4.585l-5.778 5.78l1.414 1.414L19.9 5.515V10.1h2v-8zM5.515 19.9H10.1v2h-8v-8h2v4.585l5.778-5.778l1.414 1.414zM9.172 7.757L7.757 9.172l7.071 7.07l1.415-1.414z"></svg:path>`,
})
export class GgArrowsExpandRightAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
