import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemLocationIcon],svg[tdesign-system-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h22v10h-2V3H3v13h9v2H1zm17.5 13a2.75 2.75 0 0 0-2.75 2.75c0 1.252.735 2.454 1.615 3.422c.407.448.817.814 1.135 1.075c.318-.26.728-.627 1.135-1.075c.88-.968 1.615-2.17 1.615-3.422A2.75 2.75 0 0 0 18.5 14m0 9.701l-.555-.369l-.002-.001l-.004-.003l-.012-.008l-.04-.027l-.137-.098a13 13 0 0 1-1.865-1.677c-.995-1.094-2.135-2.767-2.135-4.768a4.75 4.75 0 1 1 9.5 0c0 2.001-1.14 3.674-2.135 4.768a13 13 0 0 1-2.002 1.774l-.04.028l-.012.008l-.004.003h-.002zM17.25 16h2.5v2h-2.5zm-15 5H12v2H2.25z"></svg:path>`,
})
export class TdesignSystemLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
