import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBitcoinDiamondSolidIcon],svg[mynaui-bitcoin-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 11.25v-2.5H13a1.25 1.25 0 1 1 0 2.5zm0 4v-2.5H14a1.25 1.25 0 1 1 0 2.5z"></svg:path><svg:path d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M12.75 6a.75.75 0 0 0-1.5 0v1.25H9a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h2.25V18a.75.75 0 0 0 1.5 0v-1.25H14a2.75 2.75 0 0 0 1.266-5.192A2.75 2.75 0 0 0 13 7.25h-.25z"></svg:path></svg:g>`,
})
export class MynauiBitcoinDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
