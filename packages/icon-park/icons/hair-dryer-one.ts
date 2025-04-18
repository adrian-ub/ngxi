import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHairDryerOneIcon],svg[icon-park-hair-dryer-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M11 12.1383C11 12.0592 11.0587 11.9924 11.1371 11.9823L32.0822 9.27971C37.3414 8.60112 42 12.6973 42 18V18C42 23.3027 37.3413 27.3989 32.0822 26.7203L11.1371 24.0177C11.0587 24.0076 11 23.9408 11 23.8617V12.1383Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 12L4 8V28L11 24"></svg:path><svg:path d="M38 25L31.3061 40.8981C30.5146 42.7777 28.6738 44 26.6343 44V44C23.0091 44 20.5557 40.3051 21.9625 36.9639L27 25"></svg:path><svg:circle cx="35" cy="18" r="9" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkHairDryerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
