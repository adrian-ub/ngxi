import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoPawPrintsIcon],svg[noto-paw-prints-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="96.65" cy="75.06" fill="#176BC6" rx="7.46" ry="10.19" transform="rotate(-6.212 96.651 75.058)"></svg:ellipse><svg:ellipse cx="45.49" cy="24.46" fill="#176BC6" rx="7.7" ry="10.06" transform="rotate(-3.438 45.482 24.473)"></svg:ellipse><svg:ellipse cx="62.97" cy="30.56" fill="#176BC6" rx="9.6" ry="7.7" transform="rotate(-83.131 62.972 30.562)"></svg:ellipse><svg:ellipse cx="27.21" cy="27.8" fill="#176BC6" rx="7.83" ry="10.74" transform="rotate(-13.239 27.21 27.8)"></svg:ellipse><svg:path fill="#176BC6" d="M89.66 94.36c15.11-8.45 32.4 3.47 30.13 12.58c-2.44 9.76-11.73 4.5-18.68 7.04c-4.27 1.56-10.79 10.32-18.3 4.97c-6.55-4.67-3.01-19.08 6.85-24.59m-51.5-53.95c10.8-2.83 25.86 5.56 24.14 15.13c-1.62 9.01-14.14 5.08-19.22 6.97c-6.62 2.46-14.92 9.71-19.64 2.46c-5.32-8.19 5.24-22.07 14.72-24.56"></svg:path><svg:ellipse cx="12.91" cy="40.93" fill="#176BC6" rx="7.71" ry="9.95" transform="rotate(-30 12.909 40.928)"></svg:ellipse><svg:ellipse cx="79.08" cy="82.36" fill="#176BC6" rx="8.01" ry="10.19" transform="rotate(-30 79.075 82.363)"></svg:ellipse><svg:ellipse cx="67.22" cy="97.3" fill="#176BC6" rx="7.46" ry="10.19" transform="rotate(-35.353 67.223 97.302)"></svg:ellipse><svg:ellipse cx="115.06" cy="78.32" fill="#176BC6" rx="7.43" ry="9.46" transform="rotate(-3.533 115.05 78.335)"></svg:ellipse>`,
})
export class NotoPawPrintsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
