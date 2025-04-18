import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPushRightIcon],svg[gg-push-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 13v-2h14.485l-3.242-3.243l1.414-1.414L19.314 12l-5.657 5.657l-1.414-1.415L15.485 13zm19.288-7v12h2V6z"></svg:path>`,
})
export class GgPushRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
