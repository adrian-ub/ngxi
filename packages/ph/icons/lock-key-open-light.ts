import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLockKeyOpenLightIcon],svg[ph-lock-key-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82H94V56a34 34 0 0 1 34-34c16.3 0 31 11.69 34.12 27.19a6 6 0 0 0 11.76-2.38C169.55 25.48 150.26 10 128 10a46.06 46.06 0 0 0-46 46v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-82-94a26 26 0 0 0-6 51.29V184a6 6 0 0 0 12 0v-18.71a26 26 0 0 0-6-51.29m0 40a14 14 0 1 1 14-14a14 14 0 0 1-14 14"></svg:path>`,
})
export class PhLockKeyOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
