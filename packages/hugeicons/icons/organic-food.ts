import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsOrganicFoodIcon],svg[hugeicons-organic-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 9.255C7.606 7.958 5.08 5.715 3 2m8.616 2.419C9.58 3.084 7.097 3.642 6.069 5.666s-.211 4.747 1.824 6.083c1.842 1.209 5.874 2.459 9.107-1.004c-3.03-1.29-3.35-4.99-5.384-6.326"></svg:path><svg:path d="M4 11c-.64.47-1 1.005-1 1.572C3 14.465 7.03 16 12 16s9-1.535 9-3.428c0-.567-.36-1.101-1-1.572"></svg:path><svg:path d="M21 13c0 3.577-2.506 6.715-5.205 8.482c-.555.364-1.215.518-1.878.518h-3.834c-.663 0-1.323-.154-1.878-.518C5.506 19.715 3 16.577 3 13"></svg:path></svg:g>`,
})
export class HugeiconsOrganicFoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
