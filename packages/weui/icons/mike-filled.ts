import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiMikeFilledIcon],svg[weui-mike-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 18.96V22h-1.5v-3.04A7 7 0 0 1 5 12v-2h1.5v2a5.5 5.5 0 0 0 11 0v-2H19v2a7 7 0 0 1-6.25 6.96M8 6a4 4 0 1 1 8 0v6a4 4 0 1 1-8 0z"></svg:path>`,
})
export class WeuiMikeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
