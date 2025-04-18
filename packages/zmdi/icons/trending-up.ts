import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTrendingUpIcon],svg[zmdi-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 64h128v128l-49-49l-135 134l-85-85L30 320L0 290l158-158l85 85l105-104z"></svg:path>`,
})
export class ZmdiTrendingUpIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
