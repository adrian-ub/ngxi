import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqGalleryCollectionsIcon],svg[marketeq-gallery-collections-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M10.417 41.667h31.25a2.083 2.083 0 0 0 2.083-2.084V16.667"></svg:path><svg:path stroke="#306CFE" d="m23.417 25.354l-7.98 7.98H8.334A2.083 2.083 0 0 1 6.25 31.25V28l9.917-9.917zm5.916-5.917L15.438 33.333h17.895a2.083 2.083 0 0 0 2.084-2.083v-5.708zm-21-11.104h25a2.083 2.083 0 0 1 2.084 2.084V31.25a2.083 2.083 0 0 1-2.084 2.083h-25A2.083 2.083 0 0 1 6.25 31.25V10.417a2.083 2.083 0 0 1 2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqGalleryCollectionsIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
