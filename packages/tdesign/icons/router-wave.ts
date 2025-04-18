import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRouterWaveIcon],svg[tdesign-router-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.004 3a9.99 9.99 0 0 0-8.426 4.612l-.54.841l-1.684-1.079l.54-.842A11.99 11.99 0 0 1 12.004 1c4.247 0 7.978 2.207 10.11 5.532l.539.842l-1.684 1.08l-.54-.842A9.99 9.99 0 0 0 12.004 3m-.012 3.988A5 5 0 0 0 7.78 9.294l-.54.842l-1.683-1.079l.54-.842a7 7 0 0 1 5.896-3.227a7 7 0 0 1 5.897 3.227l.54.842l-1.684 1.08l-.54-.843a5 5 0 0 0-4.213-2.306M13 11v3h7v9H4v-9h7v-3zm-7 5v5h12v-5z"></svg:path>`,
})
export class TdesignRouterWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
