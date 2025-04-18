import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDistributeHorizontalRightIcon],svg[hugeicons-distribute-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.999 2v20M10 2v20m6.5-13.998c.844 0 1.818-.083 2.299.75c.201.348.201.816.201 1.75v3c0 .935 0 1.402-.201 1.75c-.481.834-1.455.75-2.299.75s-1.818.084-2.299-.75C14 14.904 14 14.437 14 13.502v-3c0-.934 0-1.402.201-1.75c.481-.833 1.455-.75 2.299-.75m-12-3c.844 0 1.818-.083 2.299.75C7 6.1 7 6.568 7 7.502v9c0 .935 0 1.402-.201 1.75c-.481.834-1.455.75-2.299.75s-1.818.084-2.299-.75C2 17.904 2 17.437 2 16.502v-9c0-.934 0-1.402.201-1.75c.481-.833 1.455-.75 2.299-.75" color="currentColor"></svg:path>`,
})
export class HugeiconsDistributeHorizontalRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
