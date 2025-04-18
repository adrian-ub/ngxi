import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowsShrinkVIcon],svg[gg-arrows-shrink-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1v2H7V1zm-.757 7.448l-1.414 1.414L13 8.033v7.934l1.829-1.829l1.414 1.414L12 19.795l-4.243-4.243l1.415-1.414L11 15.966V8.034L9.172 9.862L7.757 8.448L12 4.205zM17 23v-2H7v2z"></svg:path>`,
})
export class GgArrowsShrinkVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
