import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCrackIcon],svg[tdesign-crack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.388 3.02a9 9 0 0 0-.958 17.844l1.45-2.865A5 5 0 0 1 7.67 15.5l-.501-.866l1.731-1l.5.865c.31.536.78.967 1.345 1.227L9.882 14l2-4l-2.001-4.003zm2.182.116l-1.45 2.867L14.117 10l-2 4l.91 1.82a3 3 0 0 0 1.571-1.32l.501-.866l1.731 1.001l-.5.866a5 5 0 0 1-2.405 2.115l.193.387l-1.506 2.977a9 9 0 0 0 .957-17.844M1 12C1 5.925 5.925 1 12 1q.555 0 1.099.054C18.659 1.606 23 6.296 23 12c0 6.075-4.925 11-11 11q-.555 0-1.099-.054C5.341 22.394 1 17.704 1 12m8-4v4H7V8zm8 0v4h-2V8z"></svg:path>`,
})
export class TdesignCrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
