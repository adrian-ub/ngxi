import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWarehouseBoldIcon],svg[ph-warehouse-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 180h-4V61.13l6.51-1.39a12 12 0 1 0-5-23.47l-224 48A12 12 0 0 0 16 108a12.2 12.2 0 0 0 2.53-.26l1.48-.32V180H16a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24M44 102.27l168-36V180h-20v-60a12 12 0 0 0-12-12H76a12 12 0 0 0-12 12v60H44ZM168 144H88v-12h80Zm-80 24h80v12H88Z"></svg:path>`,
})
export class PhWarehouseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
