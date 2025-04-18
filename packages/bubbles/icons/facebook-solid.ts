import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFacebookSolidIcon],svg[bubbles-facebook-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.656 2H4.344A2.347 2.347 0 0 0 2 4.344v11.312A2.347 2.347 0 0 0 4.344 18h4.719v-5.656H7.187V9.53h1.875V7.625a2.816 2.816 0 0 1 2.813-2.812h2.844v2.812h-2.844v1.906h2.844l-.469 2.813h-2.375V18h3.781A2.347 2.347 0 0 0 18 15.656V4.344A2.347 2.347 0 0 0 15.656 2"></svg:path>`,
})
export class BubblesFacebookSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
