import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStoreAdd02Icon],svg[hugeicons-store-add-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10.5V15c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h3.5M21 10.5v2M7 17h4m4 1.5h7M18.5 22v-7m-.705-12.997L6.149 2.03c-1.738-.085-2.184 1.182-2.184 1.8c0 .554-.075 1.361-1.14 2.878c-1.066 1.517-.986 1.967-.385 3.017c.498.872 1.766 1.212 2.428 1.27A2.976 2.976 0 0 0 7.99 8.118c1.042 3.03 4.005 3.03 5.325 2.684c1.323-.348 2.456-1.59 2.723-2.684c.156 1.36.63 2.153 2.027 2.698c1.448.564 2.694-.299 3.319-.852s1.026-1.781-.088-3.131c-.768-.931-1.089-1.808-1.194-2.717c-.06-.527-.114-1.093-.506-1.453c-.572-.526-1.393-.686-1.801-.66" color="currentColor"></svg:path>`,
})
export class HugeiconsStoreAdd02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
