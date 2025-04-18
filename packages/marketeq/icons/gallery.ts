import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqGalleryIcon],svg[marketeq-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M18.146 20.833L6.25 32.771v6.812a2.084 2.084 0 0 0 2.083 2.084h8.938l10.833-10.834zM33.938 25L17.27 41.667h24.396a2.083 2.083 0 0 0 2.083-2.084v-4.77z"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M29 17.27h-.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 8.333H8.333c-1.15 0-2.083.933-2.083 2.084v29.166c0 1.15.933 2.084 2.083 2.084h33.334c1.15 0 2.083-.933 2.083-2.084V10.417a2.084 2.084 0 0 0-2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqGalleryIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
