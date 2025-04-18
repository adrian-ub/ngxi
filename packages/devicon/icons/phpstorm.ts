import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPhpstormIcon],svg[devicon-phpstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="deviconPhpstorm0" x1="25.8" x2="33.95" y1="33.6" y2="17.31" gradientTransform="rotate(.104)scale(1.21905)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#af1df5"></svg:stop><svg:stop offset=".21" stop-color="#bc20e4"></svg:stop><svg:stop offset=".63" stop-color="#dd29b8"></svg:stop><svg:stop offset="1" stop-color="#ff318c"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconPhpstorm1" x1="1.56" x2="35.95" y1="67.23" y2="21.8" gradientTransform="rotate(.104)scale(1.21905)" gradientUnits="userSpaceOnUse"><svg:stop offset=".02" stop-color="#6b57ff"></svg:stop><svg:stop offset=".42" stop-color="#b74af7"></svg:stop><svg:stop offset=".75" stop-color="#ff318c"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconPhpstorm2" x1="89.3" x2="65.46" y1="65.79" y2="9.23" gradientTransform="rotate(.104)scale(1.21905)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#293896"></svg:stop><svg:stop offset=".08" stop-color="#3b3aa2"></svg:stop><svg:stop offset=".29" stop-color="#6740c0"></svg:stop><svg:stop offset=".49" stop-color="#8a44d8"></svg:stop><svg:stop offset=".68" stop-color="#a347e9"></svg:stop><svg:stop offset=".86" stop-color="#b249f3"></svg:stop><svg:stop offset="1" stop-color="#b74af7"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconPhpstorm3" x1="74.68" x2="58.6" y1="93.59" y2="70.03" gradientTransform="rotate(.104)scale(1.21905)" gradientUnits="userSpaceOnUse"><svg:stop offset=".02" stop-color="#6b57ff"></svg:stop><svg:stop offset=".78" stop-color="#b74af7"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#deviconPhpstorm0)" d="m70.082 27.281l-3.898-11.8l-40.73-8.778l-19.97 22.59L27.43 40.52V27.28Zm0 0"></svg:path><svg:path fill="url(#deviconPhpstorm1)" d="M27.43 34.96L5.484 29.294l11.157 67l10.75-.086Zm0 0"></svg:path><svg:path fill="url(#deviconPhpstorm2)" d="M100.57 27.281H62.402l15.336-13.629l29.551 5.489l15.227 37.836l-21.934 21.785Zm0 0"></svg:path><svg:path fill="url(#deviconPhpstorm3)" d="m100.598 56.477l-.028 43.949H37.742l1.621 9.558l39.45 13.75l43.703-26.16Zm0 0"></svg:path><svg:path d="M27.43 27.43h73.14v73.14H27.43Zm0 0"></svg:path><svg:path fill="#fff" d="M36.547 86.746h27.43v4.574h-27.43Zm23.918-26.683l3.57-4.278a12.63 12.63 0 0 0 8.219 3.34c2.437 0 3.973-.988 3.973-2.598v-.074c0-1.535-.95-2.328-5.547-3.496c-5.547-1.414-9.118-2.953-9.118-8.414v-.086c0-4.984 4.012-8.289 9.63-8.289a15.85 15.85 0 0 1 10.214 3.5l-3.144 4.559a12.9 12.9 0 0 0-7.157-2.707c-2.316 0-3.535 1.062-3.535 2.437v.086c0 1.805 1.22 2.437 5.938 3.66c5.586 1.461 8.73 3.461 8.73 8.25v.086c0 5.461-4.172 8.535-10.105 8.535a17.48 17.48 0 0 1-11.668-4.402M36.57 36.57h11.215c6.535 0 10.496 3.88 10.496 9.473v.074c0 6.34-4.937 9.63-11.078 9.63h-4.535v8.218H36.57Zm10.801 13.813c3.012 0 4.781-1.793 4.781-4.145v-.074c0-2.703-1.879-4.156-4.879-4.156h-4.605v8.375Zm0 0"></svg:path>`,
})
export class DeviconPhpstormIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
