import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsRiderLightIcon],svg[skill-icons-rider-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#skillIconsRiderLight3)"><svg:path fill="#F4F2ED" d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"></svg:path><svg:g clip-path="url(#skillIconsRiderLight4)"><svg:path fill="url(#skillIconsRiderLight0)" d="M212.057 108.424L93.436 40.792l79.483 121.144l16.187-10.901z"></svg:path><svg:path fill="url(#skillIconsRiderLight1)" d="m164.947 80.678l-14.979-37.161l-32.856 33.197l13.287 120.4l31.89 17.094l49.768-29.728z"></svg:path><svg:path fill="url(#skillIconsRiderLight2)" d="m93.436 40.792l-50.493 34.93l18.844 119.163l48.56 19.076l62.814-52.025z"></svg:path><svg:path fill="#000" d="M178.234 75.475H76.766v104.05h101.468z"></svg:path><svg:path fill="#fff" d="M126.05 161.192H87.88v6.689h38.17zm2.658-72.835h14.979c12.079 0 20.293 8.424 20.293 19.076c0 10.901-8.214 19.572-20.293 19.572l-14.979.495zm8.456 7.928v23.535h6.523c6.764 0 11.596-4.707 11.596-11.396c0-6.936-4.59-11.644-11.596-11.644zM89.57 88.357h17.395c4.832 0 8.456 1.487 11.113 3.964c2.174 2.23 3.141 5.203 3.141 8.919v.248c0 3.22-.725 5.698-2.174 7.679q-2.175 2.973-5.799 4.46l9.422 13.873h-9.905l-7.972-11.891h-7.007V127.5H89.33zm16.912 19.076c1.933 0 3.624-.495 4.832-1.486s1.691-2.478 1.691-3.964v-.248c0-1.982-.483-3.22-1.691-4.211c-1.208-.743-2.658-1.487-4.832-1.487h-8.214v11.149h8.214z"></svg:path></svg:g></svg:g><svg:defs><svg:lineargradient id="skillIconsRiderLight0" x1="201.16" x2="69.201" y1="140.181" y2="66.335" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DD1265"></svg:stop><svg:stop offset=".483" stop-color="#DD1265"></svg:stop><svg:stop offset=".942" stop-color="#FDB60D"></svg:stop></svg:lineargradient><svg:lineargradient id="skillIconsRiderLight1" x1="123.673" x2="177.688" y1="55.934" y2="201.386" gradientUnits="userSpaceOnUse"><svg:stop offset=".139" stop-color="#087CFA"></svg:stop><svg:stop offset=".476" stop-color="#DD1265"></svg:stop><svg:stop offset=".958" stop-color="#087CFA"></svg:stop></svg:lineargradient><svg:lineargradient id="skillIconsRiderLight2" x1="85.013" x2="124.998" y1="60.434" y2="199.003" gradientUnits="userSpaceOnUse"><svg:stop offset=".278" stop-color="#DD1265"></svg:stop><svg:stop offset=".968" stop-color="#FDB60D"></svg:stop></svg:lineargradient><svg:clippath id="skillIconsRiderLight3"><svg:path fill="#fff" d="M0 0h256v256H0z"></svg:path></svg:clippath><svg:clippath id="skillIconsRiderLight4"><svg:path fill="#fff" d="M42.943 40.792h169.113v173.417H42.943z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SkillIconsRiderLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
