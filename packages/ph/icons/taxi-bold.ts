import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTaxiBoldIcon],svg[ph-taxi-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 100h-9l-26.28-45.92A20 20 0 0 0 187.36 44h-19.24l-11-27.43A19.9 19.9 0 0 0 138.58 4h-21.16a19.9 19.9 0 0 0-18.57 12.57L87.88 44H68.64a20 20 0 0 0-17.36 10.08L25 100h-9a12 12 0 0 0 0 24h4v76a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-20h80v20a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-76h4a12 12 0 0 0 0-24M120.12 28h15.76l6.4 16h-28.56ZM71 68h114l18.28 32H52.68Zm-7 128H44v-16h20Zm148 0h-20v-16h20Zm0-40H44v-32h168Z"></svg:path>`,
})
export class PhTaxiBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
