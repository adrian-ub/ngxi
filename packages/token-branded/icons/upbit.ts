import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedUpbitIcon],svg[token-branded-upbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#093687" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path><svg:path fill="#fff" d="m11.45 15.226l1.606-4.878l.773.252l-.552-1.826h4.778c.868 0 1.319.774 1.007 1.727l-.303.922l-.013.036l-.012.033q-.127.342-.343.635c-.455.619-1.147 1.02-1.764 1.023h-2.399l-.68 2.075zm3.132-3.153h1.273c.319 0 .67-.284.785-.634l.313-.952c.115-.35-.05-.634-.369-.634h-1.273zM5.94 15.225a1.5 1.5 0 0 1-.426-.08a.95.95 0 0 1-.431-.293a1 1 0 0 1-.16-.29a1 1 0 0 1-.049-.163a1.7 1.7 0 0 1 .041-.833l.038-.126l1.534-4.665h2.114l-1.557 4.738c-.085.26-.019.49.167.587q.091.05.195.047h1.045l1.765-5.372h2.39L10.854 10.6l.946-.252l-1.606 4.877z"></svg:path></svg:g>`,
})
export class TokenBrandedUpbitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
