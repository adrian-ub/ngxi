import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconClionIcon],svg[devicon-clion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="deviconClion0" x1="39.01" x2="66.51" y1="23.27" y2="23.27" gradientTransform="rotate(.104)scale(1.21905)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#ff318c"></svg:stop><svg:stop offset=".15" stop-color="#fb348c"></svg:stop><svg:stop offset=".28" stop-color="#f03c8c"></svg:stop><svg:stop offset=".42" stop-color="#de4a8c"></svg:stop><svg:stop offset=".54" stop-color="#c45d8b"></svg:stop><svg:stop offset=".67" stop-color="#a2778b"></svg:stop><svg:stop offset=".79" stop-color="#79958a"></svg:stop><svg:stop offset=".91" stop-color="#49b98a"></svg:stop><svg:stop offset="1" stop-color="#21d789"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconClion1" x1="27.99" x2="13.87" y1="16.68" y2="111.42" gradientTransform="rotate(.104)scale(1.21905)" gradientUnits="userSpaceOnUse"><svg:stop offset=".09" stop-color="#21d789"></svg:stop><svg:stop offset=".9" stop-color="#009ae5"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconClion2" x1="92.05" x2="-4.53" y1="13.4" y2="115.4" gradientTransform="rotate(.104)scale(1.21905)" gradientUnits="userSpaceOnUse"><svg:stop offset=".09" stop-color="#21d789"></svg:stop><svg:stop offset=".9" stop-color="#009ae5"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconClion3" x1="62.84" x2="95.87" y1="77.02" y2="81.72" gradientTransform="rotate(.104)scale(1.21905)" gradientUnits="userSpaceOnUse"><svg:stop offset=".09" stop-color="#21d789"></svg:stop><svg:stop offset=".9" stop-color="#009ae5"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#deviconClion0)" d="M47.555 51.25L50.09 5.484l26.613 14.75Zm0 0"></svg:path><svg:path fill="url(#deviconClion1)" d="M47.555 51.25L50.09 5.484L16.297 26.781L5.484 91.527Zm0 0"></svg:path><svg:path fill="url(#deviconClion2)" d="m120.188 40.559l-15.06-30.61l-28.425 10.285L47.555 51.25L5.485 91.527l37.949 27.621l47.703-43.02Zm0 0"></svg:path><svg:path fill="url(#deviconClion3)" d="M100.57 72.582v27.988H54.613l20.2 15.63l29.257 6.316l18.446-41.754Zm0 0"></svg:path><svg:path d="M27.43 27.43h73.14v73.14H27.43Zm0 0"></svg:path><svg:path fill="#fff" d="M36.547 86.746h27.43v4.574h-27.43ZM64.063 36.5h6.093v22.418h12.008V64H64.062ZM34.597 50.434v-.075a14.06 14.06 0 0 1 4.156-10.234a14.06 14.06 0 0 1 10.266-4.078a14.28 14.28 0 0 1 10.898 4.266l-3.84 4.476a10.22 10.22 0 0 0-7.086-3.121c-4.656 0-8.008 3.863-8.008 8.605v.086c0 4.743 3.278 8.692 8.008 8.692c3.172 0 5.098-1.219 7.317-3.242l3.8 3.925a14.14 14.14 0 0 1-11.347 4.875a13.94 13.94 0 0 1-10.082-4.09a13.94 13.94 0 0 1-4.082-10.085"></svg:path>`,
})
export class DeviconClionIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
