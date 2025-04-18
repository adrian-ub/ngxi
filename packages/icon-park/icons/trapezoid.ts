import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTrapezoidIcon],svg[icon-park-trapezoid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M31.7944 8H16.2056C14.8934 8 13.7335 8.85275 13.3421 10.1052L5.21713 36.1052C4.61345 38.037 6.05665 40 8.08057 40H39.9194C41.9433 40 43.3866 38.037 42.7829 36.1052L34.6579 10.1052C34.2665 8.85275 33.1066 8 31.7944 8Z"></svg:path>`,
})
export class IconParkTrapezoidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
