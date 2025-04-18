import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBoxingIcon],svg[icon-park-solid-boxing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" stroke-miterlimit="2" d="M38 36v6a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2v-6"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" d="M11 15v-5a6 6 0 0 1 6-6h21a6 6 0 0 1 6 6v20c0 3.314-2.68 6-5.994 6H15C8 36 4 28 4 23v-8z"></svg:path><svg:path d="M11 14v8"></svg:path></svg:g>`,
})
export class IconParkSolidBoxingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
