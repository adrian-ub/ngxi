import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLoadingTwoIcon],svg[icon-park-loading-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 3.99994V11.9999"></svg:path><svg:path d="M38.1421 9.85779L32.4852 15.5146"></svg:path><svg:path d="M44 23.9999H36"></svg:path><svg:path d="M38.1421 38.1421L32.4852 32.4852"></svg:path><svg:path d="M24 43.9999V35.9999"></svg:path><svg:path d="M9.85791 38.1421L15.5148 32.4852"></svg:path><svg:path d="M4 23.9999H12"></svg:path><svg:path d="M9.85791 9.85779L15.5148 15.5146"></svg:path><svg:path d="M16.3467 5.5224L17.8774 9.21792"></svg:path><svg:path d="M5.52246 16.3461L9.21798 17.8769"></svg:path><svg:path d="M5.52246 31.6537L9.21798 30.123"></svg:path><svg:path d="M16.3467 42.4777L17.8774 38.7822"></svg:path><svg:path d="M31.6538 42.4777L30.123 38.7822"></svg:path><svg:path d="M42.4777 31.6537L38.7822 30.123"></svg:path><svg:path d="M42.4777 16.3461L38.7822 17.8769"></svg:path><svg:path d="M31.6538 5.5224L30.123 9.21792"></svg:path></svg:g>`,
})
export class IconParkLoadingTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
