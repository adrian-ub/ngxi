import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagSaoTomeAndPrincipeIcon],svg[twemoji-flag-for-flag-sao-tome-and-principe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#12AD2B" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"></svg:path><svg:path fill="#FFCE00" d="M8.173 13.5H36v9H8.173z"></svg:path><svg:path fill="#D21034" d="M1.149 6.195A3.984 3.984 0 0 0 0 9v18c0 1.093.438 2.083 1.148 2.805L12.5 18L1.149 6.195z"></svg:path><svg:path d="M18.004 20.36l1.625-1.181l1.624 1.181l-.62-1.91l1.624-1.181h-2.008l-.62-1.909l-.621 1.909H17l1.625 1.181zm9.5 0l1.625-1.181l1.624 1.181l-.62-1.91l1.624-1.181h-2.008l-.62-1.909l-.621 1.909H26.5l1.625 1.181z" fill="#000"></svg:path>`,
})
export class TwemojiFlagForFlagSaoTomeAndPrincipeIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
