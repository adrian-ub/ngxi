import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEduIcon],svg[token-branded-edu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedEdu0)" d="M3.563 16.553v-1.279l7.312 3.753v-5.502l1.643-1.079a.9.9 0 0 1 .045.312v7.189c0 1.197-1.271 1.19-1.823.872c-1.834-1.052-6.166-3.204-6.582-3.391c-.415-.188-.588-.66-.596-.875"></svg:path><svg:path fill="#4273EB" d="M8.625 14.503L3.563 11.69v1.872l5.062 2.766z"></svg:path><svg:path fill="url(#tokenBrandedEdu1)" d="m3.563 9.62l7.314 3.904l1.644-1.067s-.182-.196-.393-.328L3.76 7.605a.6.6 0 0 0-.199.429z"></svg:path><svg:path fill="url(#tokenBrandedEdu2)" d="M11.34 3.161L3.76 7.606l1.616.938l2.648-1.47l6.8 3.9l1.522-1.051a1.7 1.7 0 0 0-.487-.435L9.816 6.09l2.264-1.249l6.667 3.84l1.557-1.036c-.11-.23-.378-.402-.514-.486L12.713 3.16c-.598-.285-1.14-.13-1.373 0"></svg:path><svg:path fill="url(#tokenBrandedEdu3)" d="M14.813 20.61v-9.627l1.53-1.06c.125.134.157.36.157.44v9.156z"></svg:path><svg:path fill="url(#tokenBrandedEdu4)" d="M18.75 18.197v-9.51l1.53-1.048c.125.133.158.355.158.436v8.6s0 .36-.255.542z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedEdu0" x1="17.754" x2="12.908" y1="4.5" y2="19.004" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7CD872"></svg:stop><svg:stop offset=".796" stop-color="#4073F3"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEdu1" x1="3.563" x2="20.088" y1="6.527" y2="12.158" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6EC185"></svg:stop><svg:stop offset="1" stop-color="#4373EA"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEdu2" x1="8.462" x2="18.849" y1="6.922" y2="9.987" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7BDF6A"></svg:stop><svg:stop offset="1" stop-color="#416FF6"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEdu3" x1="12" x2="12" y1="3.001" y2="21.002" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7CD872"></svg:stop><svg:stop offset="1" stop-color="#4073F3"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEdu4" x1="19.594" x2="19.594" y1="7.639" y2="18.197" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7CD872"></svg:stop><svg:stop offset="1" stop-color="#4073F3"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedEduIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
