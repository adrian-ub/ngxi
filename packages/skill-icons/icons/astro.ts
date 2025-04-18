import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsAstroIcon],svg[skill-icons-astro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="url(#skillIconsAstro0)" rx="60"></svg:rect><svg:path fill="#31274A" fill-rule="evenodd" d="M157.719 33.011c1.634 2.028 2.466 4.765 4.132 10.237l36.396 119.561a151.5 151.5 0 0 0-43.513-14.732l-23.697-80.08a3.086 3.086 0 0 0-4.809-1.593c-.533.4-.922.962-1.109 1.602l-23.411 80.031A151.5 151.5 0 0 0 58 162.791l36.573-119.57c1.673-5.464 2.507-8.195 4.141-10.219a13.44 13.44 0 0 1 5.449-4.032c2.414-.97 5.27-.97 10.984-.97h26.123c5.721 0 8.581 0 10.997.972a13.45 13.45 0 0 1 5.452 4.04" clip-rule="evenodd"></svg:path><svg:path fill="#FF5D01" fill-rule="evenodd" d="M162.074 168.499c-6 5.131-17.976 8.629-31.77 8.629c-16.931 0-31.122-5.271-34.887-12.359c-1.346 4.063-1.648 8.712-1.648 11.683c0 0-.887 14.585 9.257 24.729a9.54 9.54 0 0 1 9.538-9.538c9.028 0 9.018 7.877 9.009 14.268v.57c0 9.7 5.928 18.015 14.359 21.519a19.55 19.55 0 0 1-1.966-8.572c0-9.251 5.432-12.696 11.744-16.698c5.022-3.185 10.602-6.724 14.448-13.824a26.06 26.06 0 0 0 3.145-12.454c0-2.773-.431-5.445-1.229-7.953" clip-rule="evenodd"></svg:path><svg:path fill="url(#skillIconsAstro1)" fill-rule="evenodd" d="M162.074 168.499c-6 5.131-17.976 8.629-31.77 8.629c-16.931 0-31.122-5.271-34.887-12.359c-1.346 4.063-1.648 8.712-1.648 11.683c0 0-.887 14.585 9.257 24.729a9.54 9.54 0 0 1 9.538-9.538c9.028 0 9.018 7.877 9.009 14.268v.57c0 9.7 5.928 18.015 14.359 21.519a19.55 19.55 0 0 1-1.966-8.572c0-9.251 5.432-12.696 11.744-16.698c5.022-3.185 10.602-6.724 14.448-13.824a26.06 26.06 0 0 0 3.145-12.454c0-2.773-.431-5.445-1.229-7.953" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="skillIconsAstro0" x1="128" x2="128" y1="0" y2="256" gradientUnits="userSpaceOnUse"><svg:stop offset=".193" stop-color="#FCB3B2"></svg:stop><svg:stop offset="1" stop-color="#C587EE"></svg:stop></svg:lineargradient><svg:lineargradient id="skillIconsAstro1" x1="189.089" x2="153.565" y1="126.765" y2="201.132" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF1639"></svg:stop><svg:stop offset="1" stop-color="#FF1639" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class SkillIconsAstroIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
