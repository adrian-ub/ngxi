import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDistributeHorizontalCenterIcon],svg[hugeicons-distribute-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 5V2m0 17v3M17 8.002c.844 0 1.818-.083 2.299.75c.201.348.201.816.201 1.75v3c0 .935 0 1.402-.201 1.75c-.481.834-1.455.75-2.299.75s-1.818.084-2.299-.75c-.201-.348-.201-.815-.201-1.75v-3c0-.934 0-1.402.201-1.75c.481-.833 1.455-.75 2.299-.75m-10-3c.844 0 1.818-.083 2.299.75c.201.348.201.816.201 1.75v9c0 .935 0 1.402-.201 1.75c-.481.834-1.455.75-2.299.75s-1.818.084-2.299-.75c-.201-.348-.201-.815-.201-1.75v-9c0-.934 0-1.402.201-1.75c.481-.833 1.455-.75 2.299-.75M17 8V2m0 14v6" color="currentColor"></svg:path>`,
})
export class HugeiconsDistributeHorizontalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
