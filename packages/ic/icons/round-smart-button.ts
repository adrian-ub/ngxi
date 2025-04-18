import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSmartButtonIcon],svg[ic-round-smart-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9v6c0 1.1-.9 2-2 2h-1v-2h1V9H4v6h6v2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2m-7.96 8.99a.5.5 0 0 0 .91 0l.63-1.4l1.4-.63a.5.5 0 0 0 0-.91l-1.4-.63l-.63-1.4a.5.5 0 0 0-.91 0l-.63 1.4l-1.4.63a.5.5 0 0 0 0 .91l1.4.63zm2.7-4.56c.1.22.42.22.52 0l.36-.8l.8-.36c.22-.1.22-.42 0-.52l-.8-.36l-.36-.8a.287.287 0 0 0-.52 0l-.36.8l-.8.36c-.22.1-.22.42 0 .52l.8.36z"></svg:path>`,
})
export class IcRoundSmartButtonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
