import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epGoodsFilledIcon],svg[ep-goods-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 352h640l64 544H128zm128 224h64V448h-64zm320 0h64V448h-64zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0"></svg:path>`,
})
export class EpGoodsFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
