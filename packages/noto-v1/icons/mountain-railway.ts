import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1MountainRailwayIcon],svg[noto-v1-mountain-railway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="notoV1MountainRailway0" d="M127.99 115.89c0 6.66-5.44 12.1-12.09 12.1H12.1c-6.65 0-12.1-5.44-12.1-12.1V12.1C0 5.44 5.44 0 12.1 0h103.8c6.65 0 12.09 5.44 12.09 12.1z"></svg:path></svg:defs><svg:clippath id="notoV1MountainRailway1"><svg:use href="#notoV1MountainRailway0"></svg:use></svg:clippath><svg:path fill="#757f3f" d="M64 19.44c-50 0-73.49 65.07-73.49 65.07l2.67 56.54h141.66l2.67-56.54c-.02 0-23.5-65.07-73.51-65.07" clip-path="url(#notoV1MountainRailway1)"></svg:path><svg:g clip-path="url(#notoV1MountainRailway1)"><svg:path fill="#2f2f2f" d="M64 46.33c-19.66 0-35.61 15.94-35.61 35.61v32.22H99.6V81.94c0-19.67-15.94-35.61-35.6-35.61"></svg:path><svg:path fill="#855c52" d="M122.42 127.87H5.57l22.82-13.71H99.6z"></svg:path><svg:path fill="#2f2f2f" d="M49.46 127.98h-7.72l8.7-13.87h4.7zm29.07 0h7.72l-8.69-13.87h-4.7z"></svg:path></svg:g><svg:path fill="#fff" d="M54.83 113.11c0 1.24-1 2.25-2.25 2.25c-1.24 0-2.25-1.01-2.25-2.25v-8.66c0-1.24 1-2.25 2.25-2.25s2.25 1.01 2.25 2.25zm18.23 0c0 1.24 1 2.25 2.25 2.25s2.25-1.01 2.25-2.25v-8.66c0-1.24-1.01-2.25-2.25-2.25c-1.25 0-2.25 1.01-2.25 2.25z"></svg:path><svg:defs><svg:path id="notoV1MountainRailway2" d="M86.79 97.74c0 5.71-4.63 10.33-10.34 10.33h-25c-5.7 0-10.34-4.62-10.34-10.33V69.26c0-5.71 4.64-10.33 10.34-10.33h25.01c5.72 0 10.34 4.62 10.34 10.33v28.48z"></svg:path></svg:defs><svg:use fill="#fcc21b" href="#notoV1MountainRailway2"></svg:use><svg:path fill="#40c0e7" d="M82.23 74.99c0 3.08-2.49 5.58-5.57 5.58H51.24c-3.08 0-5.58-2.5-5.58-5.58v-7.05c0-3.08 2.51-5.58 5.58-5.58h25.42c3.08 0 5.57 2.5 5.57 5.58z"></svg:path><svg:path fill="#fff" d="M53.27 97.75c0 2.07-1.68 3.75-3.75 3.75c-2.08 0-3.75-1.68-3.75-3.75c0-2.08 1.68-3.75 3.75-3.75s3.75 1.67 3.75 3.75m21.36 0c0 2.07 1.67 3.75 3.75 3.75c2.07 0 3.75-1.68 3.75-3.75c0-2.08-1.67-3.75-3.75-3.75c-2.07 0-3.75 1.67-3.75 3.75"></svg:path>`,
})
export class NotoV1MountainRailwayIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
