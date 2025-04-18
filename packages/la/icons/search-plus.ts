import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSearchPlusIcon],svg[la-search-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28l1.439 1.44l7.968-7.969A9.92 9.92 0 0 0 19 23c5.512 0 10-4.488 10-10S24.512 3 19 3m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8m-1 4v3h-3v2h3v3h2v-3h3v-2h-3V9z"></svg:path>`,
})
export class LaSearchPlusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
