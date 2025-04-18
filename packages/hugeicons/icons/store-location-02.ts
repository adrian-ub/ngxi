import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStoreLocation02Icon],svg[hugeicons-store-location-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.977 10.515v4.494c0 2.825 0 4.237.88 5.115c.879.878 2.295.878 5.126.878h4.005m-6.007-3.995h4.005m7.508-3.497c1.935 0 3.504 1.536 3.504 3.43c0 2.144-2.118 3.197-3.129 4.803c-.215.343-.52.343-.75 0c-1.042-1.545-3.129-2.704-3.129-4.802c0-1.895 1.569-3.43 3.504-3.43m0 3.496h.01m-.708-15.004L6.15 2.03c-1.738-.085-2.184 1.182-2.184 1.8c0 .554-.075 1.361-1.14 2.878C1.76 8.225 1.84 8.675 2.44 9.725c.498.872 1.766 1.212 2.428 1.27A2.976 2.976 0 0 0 7.99 8.118c1.042 3.03 4.005 3.03 5.325 2.684c1.322-.348 2.456-1.59 2.723-2.684c.156 1.36.63 2.153 2.027 2.698c1.449.564 2.694-.299 3.319-.852s1.026-1.781-.088-3.131c-.768-.931-1.089-1.808-1.194-2.717c-.06-.527-.114-1.093-.506-1.453c-.572-.526-1.394-.686-1.801-.66" color="currentColor"></svg:path>`,
})
export class HugeiconsStoreLocation02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
