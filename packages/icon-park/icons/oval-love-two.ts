import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOvalLoveTwoIcon],svg[icon-park-oval-love-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23.7839 10.372C18.6739 5.81238 12.6448 4.14698 8.25809 6.67962C2.04029 10.2694 1.47691 20.9342 6.99976 30.5001C10.6308 36.7892 15.9885 41.0375 21 42.1899"></svg:path><svg:path d="M18.2581 17.5001C12.7353 27.0659 13.2986 37.7307 19.5164 41.3206C25.7342 44.9104 35.2519 40.0659 40.7748 30.5001C46.2976 20.9342 45.7342 10.2694 39.5164 6.67962C33.2986 3.08977 23.7809 7.93428 18.2581 17.5001Z"></svg:path></svg:g>`,
})
export class IconParkOvalLoveTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
