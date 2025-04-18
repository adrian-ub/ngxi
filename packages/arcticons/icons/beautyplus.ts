import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBeautyplusIcon],svg[arcticons-beautyplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m9.262 12.92l25.933-3.568a5.5 5.5 0 0 1 6.213 4.708l2.04 14.808a5.5 5.5 0 0 1-4.71 6.211l-25.933 3.569a5.5 5.5 0 0 1-6.213-4.708l-2.04-14.808a5.5 5.5 0 0 1 4.71-6.212"></svg:path><svg:path d="M8.807 13.007c.712-.208 1.259-.623 1.736-1.717c.216-.492.6-.914 1.17-.993l2.721-.374c.57-.079 1.055.224 1.395.64c.71.869 1.317 1.143 2.004 1.18"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.027 17.746c-.125.017-1.366-1.43-1.467-1.507s-1.83-.88-1.847-1.005c-.018-.125 1.43-1.366 1.507-1.466s.88-1.83 1.005-1.847s1.366 1.43 1.467 1.507s1.83.88 1.847 1.005c.018.125-1.43 1.365-1.507 1.466s-.88 1.83-1.005 1.847"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M31.982 23.333c.602 4.374-2.457 8.408-6.833 9.01s-8.412-2.456-9.014-6.83h0a7.995 7.995 0 0 1 6.833-9.01h0a7.997 7.997 0 0 1 9.014 6.83m-15.847 2.181l-1.29-9.373"></svg:path><svg:path d="M24.68 22.451a2.06 2.06 0 0 1-1.758 2.32h0a2.06 2.06 0 0 1-2.321-1.759h0a2.059 2.059 0 0 1 4.08-.56"></svg:path></svg:g>`,
})
export class ArcticonsBeautyplusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
