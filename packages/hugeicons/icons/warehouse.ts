import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWarehouseIcon],svg[hugeicons-warehouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m10.448 2.984l-5.5 2.315c-1.187.5-1.78.75-2.114 1.253S2.5 7.698 2.5 8.986V21.5h3v-10c0-.943 0-1.414.293-1.707S6.557 9.5 7.5 9.5h9c.943 0 1.414 0 1.707.293s.293.764.293 1.707v10h3V8.986c0-1.288 0-1.932-.334-2.434s-.927-.753-2.114-1.253l-5.5-2.315C12.787 2.66 12.404 2.5 12 2.5s-.787.161-1.552.484M11 6.5h2"></svg:path><svg:path d="M13 15.5h-2c-.943 0-1.414 0-1.707.293S9 16.557 9 17.5v2c0 .943 0 1.414.293 1.707s.764.293 1.707.293h2c.943 0 1.414 0 1.707-.293S15 20.443 15 19.5v-2c0-.943 0-1.414-.293-1.707S13.943 15.5 13 15.5"></svg:path></svg:g>`,
})
export class HugeiconsWarehouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
