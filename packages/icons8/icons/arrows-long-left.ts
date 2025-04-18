import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8ArrowsLongLeftIcon],svg[icons8-arrows-long-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.813 9.28l-6 6l-.72.72l.72.72l6 6l1.406-1.44L7.936 17H28v-2H7.937l4.282-4.28l-1.408-1.44z"></svg:path>`,
})
export class Icons8ArrowsLongLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
