import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlignVerticalCenterIcon],svg[hugeicons-align-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 8.002c.844 0 1.818-.083 2.299.75c.201.348.201.816.201 1.75v3c0 .935 0 1.402-.201 1.75c-.481.834-1.455.75-2.299.75s-1.818.084-2.299-.75C14 14.904 14 14.437 14 13.502v-3c0-.934 0-1.402.201-1.75c.481-.833 1.455-.75 2.299-.75m-9-4c.844 0 1.818-.083 2.299.75c.201.348.201.816.201 1.75v11c0 .935 0 1.402-.201 1.75c-.481.834-1.455.75-2.299.75s-1.818.084-2.299-.75C5 18.904 5 18.437 5 17.502v-11c0-.934 0-1.402.201-1.75c.481-.833 1.455-.75 2.299-.75M5 12H2m12 0h-4m12 0h-3" color="currentColor"></svg:path>`,
})
export class HugeiconsAlignVerticalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
