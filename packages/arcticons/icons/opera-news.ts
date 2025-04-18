import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOperaNewsIcon],svg[arcticons-opera-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.605 9.576h-7.057c-4.203 0-5.999 1.063-7.017 5.078L4.5 38.424h10.29c1.194 0 1.914-.801 2.249-2.019zm-1.21 28.848h7.057c4.203 0 5.999-1.063 7.017-5.078L43.5 9.576H33.21c-1.194 0-1.914.801-2.249 2.019zm1.182-28.747L28.6 19.964m-5.237 18.46l-4.236-9.422"></svg:path>`,
})
export class ArcticonsOperaNewsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
