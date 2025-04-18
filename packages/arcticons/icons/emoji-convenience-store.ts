import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiConvenienceStoreIcon],svg[arcticons-emoji-convenience-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.028 19.95h26.42v12.517H4.552V19.951h2.201m5.138 12.516v-7.363"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.754 19.214c0 2.033 2.3 3.682 5.137 3.682s5.137-1.649 5.137-3.682s-2.3-3.681-5.137-3.681s-5.137 1.648-5.137 3.681m1.468 5.89h7.339v7.363H8.222zm10.274 0h7.339v7.363h-7.339zm7.339 0h7.338v7.363h-7.338zm7.338 0h7.339v7.363h-7.339z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.173 18.63c0-.708.639-1.266 1.37-1.125c.479.092.862.508.91.996c.035.362-.08.72-.33.94c-.461.407-1.95 1.504-1.95 1.504h2.286m3.026 0v-3.461l-1.85 2.324h2.283"></svg:path>`,
})
export class ArcticonsEmojiConvenienceStoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
