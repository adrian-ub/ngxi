import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWomansHatIcon],svg[openmoji-womans-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f1b31c" d="M49.175 39.888s2.46-19.166-13.25-19.082s-12.93 19.082-12.93 19.082s5.524.767 13.065.767s13.115-.767 13.115-.767"></svg:path><svg:path fill="#f1b31c" d="M36.06 33.047c-12.942 0-26 2.255-26 7.29c0 5.879 18.182 6.514 26 6.514c6.449 0 27.49-.47 27.49-6.513c0-4.786-13.83-7.29-27.49-7.29"></svg:path><svg:path fill="#d22f27" d="M38.584 40.655s-.073-3.884-2.659-3.884c-3.508 0-12.93-.634-12.93-.634v3.884s5.524.634 13.065.634z"></svg:path><svg:path fill="#ea5a47" d="M40.804 40.486a2.784 2.784 0 0 1-.118-5.567c3.775-.08 5.136 3.8 5.168 5.338z"></svg:path><svg:path fill="#ea5a47" d="M50.784 39.881a2.784 2.784 0 1 0-.6-5.536c-3.754.408-4.603 4.431-4.437 5.96z"></svg:path><svg:path fill="#a57939" d="M40.686 34.162s1.31-8.544-4.761-13.356l5.485.985l5.605 5.21l2.096 7.16l-3.257 3.79l-2.596-3.244z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M40.804 40.486a2.784 2.784 0 0 1-.118-5.567c3.775-.08 5.136 3.8 5.168 5.338z"></svg:path><svg:path d="M50.784 39.881a2.784 2.784 0 1 0-.6-5.536c-3.754.408-4.603 4.431-4.437 5.96z"></svg:path><svg:path d="M22.861 34.882c-7.944 1.086-13.292 3.123-13.292 5.456c0 3.474 11.86 6.291 26.491 6.291s26.49-2.817 26.49-6.291c0-1.488-2.176-2.856-5.814-3.933"></svg:path><svg:path d="M44.315 36.526a131 131 0 0 0 2.514-.174"></svg:path><svg:path d="M49.179 34.329c-.557-5.653-3.14-13.577-13.254-13.523c-15.71.085-12.93 19.082-12.93 19.082s5.524.767 13.065.767a139 139 0 0 0 9.687-.35"></svg:path><svg:path d="M22.995 36.137s5.524.634 13.065.634q1.058 0 2.061-.015"></svg:path></svg:g>`,
})
export class OpenmojiWomansHatIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
