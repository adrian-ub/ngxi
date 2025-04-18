import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPlayButtonIcon],svg[openmoji-play-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M20.084 54.88c.467.172.992.286 1.517.286c.817 0 1.635-.285 2.335-.743l28.89-15.388l.291-.286c.759-.744 1.167-1.659 1.167-2.689s-.408-2.002-1.167-2.688l-.292-.286l-28.89-15.502c-1.05-.801-2.567-.973-3.851-.458c-1.46.572-2.393 2.002-2.393 3.547v30.66c0 1.545.934 2.976 2.393 3.548"></svg:path><svg:path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M19.582 55.606c.484.178 1.03.297 1.575.297c.849 0 1.697-.297 2.425-.772l30-15.98l.303-.296c.788-.772 1.212-1.723 1.212-2.792s-.425-2.08-1.212-2.792l-.303-.297l-30-16.098c-1.091-.832-2.667-1.01-4-.475c-1.516.594-2.485 2.079-2.485 3.683v31.84c0 1.603.97 3.088 2.485 3.682Z"></svg:path>`,
})
export class OpenmojiPlayButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
