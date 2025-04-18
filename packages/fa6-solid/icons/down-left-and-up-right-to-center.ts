import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidDownLeftAndUpRightToCenterIcon],svg[fa6-solid-down-left-and-up-right-to-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87l39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8h-144c-13.3 0-24-10.7-24-24v-144c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39zM72 272h144c13.3 0 24 10.7 24 24v144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39l-87 87c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2S62.3 272 72 272"></svg:path>`,
})
export class Fa6SolidDownLeftAndUpRightToCenterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
