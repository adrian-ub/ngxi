import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHandDownIcon],svg[icon-park-outline-hand-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M7.053 10h22V4h-22z"></svg:path><svg:path d="M29.053 10q9.78 10.684 11.222 12.384c1.443 1.7.837 3.62-2.775 3.62s-5.695-5.285-8.447-5.285q-.024-.004-.003 20.277a3 3 0 0 1-2.998 3.005h-.003a3.004 3.004 0 0 1-3.004-3.005v-8.01q-11.96-1.812-13.004-2c-1.044-.187-2.988-1.184-2.988-4.053V10z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkOutlineHandDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
