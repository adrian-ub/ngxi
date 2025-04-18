import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDistributeHorizontalLeftIcon],svg[hugeicons-distribute-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.001 2v20M14 2v20m5.5-13.998c-.844 0-1.818-.083-2.299.75C17 9.1 17 9.568 17 10.502v3c0 .935 0 1.402.201 1.75c.481.834 1.455.75 2.299.75s1.818.084 2.299-.75c.201-.348.201-.815.201-1.75v-3c0-.934 0-1.402-.201-1.75c-.481-.833-1.455-.75-2.299-.75m-12-3c-.844 0-1.818-.083-2.299.75C5 6.1 5 6.568 5 7.502v9c0 .935 0 1.402.201 1.75c.481.834 1.455.75 2.299.75s1.818.084 2.299-.75c.201-.348.201-.815.201-1.75v-9c0-.934 0-1.402-.201-1.75c-.481-.833-1.455-.75-2.299-.75" color="currentColor"></svg:path>`,
})
export class HugeiconsDistributeHorizontalLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
