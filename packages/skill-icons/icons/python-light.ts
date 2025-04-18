import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsPythonLightIcon],svg[skill-icons-python-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#F4F2ED" rx="60"></svg:rect><svg:path fill="url(#skillIconsPythonLight0)" d="M127.279 29c-50.772 0-47.602 22.018-47.602 22.018l.057 22.81h48.451v6.85H60.489S28 76.992 28 128.221s28.357 49.414 28.357 49.414h16.924v-23.773s-.912-28.357 27.905-28.357h48.054s26.999.436 26.999-26.094V55.546S180.338 29 127.279 29m-26.716 15.339a8.71 8.71 0 0 1 8.717 8.717a8.71 8.71 0 0 1-8.717 8.716a8.71 8.71 0 0 1-8.716-8.716a8.71 8.71 0 0 1 8.716-8.717"></svg:path><svg:path fill="url(#skillIconsPythonLight1)" d="M128.721 227.958c50.772 0 47.602-22.017 47.602-22.017l-.057-22.811h-48.451v-6.849h67.696S228 179.966 228 128.736s-28.357-49.413-28.357-49.413h-16.924v23.773s.912 28.357-27.905 28.357H106.76s-27-.437-27 26.093v43.866s-4.099 26.546 48.961 26.546m26.716-15.339a8.71 8.71 0 0 1-8.717-8.716a8.71 8.71 0 0 1 8.717-8.717a8.71 8.71 0 0 1 8.717 8.717a8.71 8.71 0 0 1-8.717 8.716"></svg:path><svg:defs><svg:lineargradient id="skillIconsPythonLight0" x1="47.22" x2="146.333" y1="46.896" y2="145.02" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#387EB8"></svg:stop><svg:stop offset="1" stop-color="#366994"></svg:stop></svg:lineargradient><svg:lineargradient id="skillIconsPythonLight1" x1="108.056" x2="214.492" y1="109.905" y2="210.522" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFE052"></svg:stop><svg:stop offset="1" stop-color="#FFC331"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class SkillIconsPythonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
