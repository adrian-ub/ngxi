import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsRemixLightIcon],svg[skill-icons-remix-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="skillIconsRemixLight0" fill="#000" d="M187.903 168.726c1.361 17.488 1.361 25.686 1.361 34.634h-40.462c0-1.949.035-3.732.07-5.54c.11-5.621.224-11.482-.687-23.318c-1.203-17.329-8.665-21.179-22.386-21.179H62.16v-31.528h65.565c17.331 0 25.997-5.272 25.997-19.231c0-12.275-8.666-19.713-25.997-19.713H62.16V52h72.786c39.236 0 58.734 18.532 58.734 48.134c0 22.142-13.72 36.582-32.256 38.989c15.647 3.129 24.794 12.034 26.479 29.603"></svg:path></svg:defs><svg:g fill="none"><svg:rect width="256" height="256" fill="#F4F2ED" rx="60"></svg:rect><svg:use href="#skillIconsRemixLight0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#skillIconsRemixLight0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:path fill="#000" d="M62.16 203.36v-23.503h42.783c7.146 0 8.698 5.3 8.698 8.461v15.042z"></svg:path><svg:path fill="#000" stroke="#fff" stroke-opacity=".8" stroke-width=".32" d="M62 203.36v.16h51.801v-15.202c0-1.602-.392-3.755-1.701-5.512c-1.314-1.765-3.539-3.109-7.157-3.109H62z"></svg:path></svg:g>`,
})
export class SkillIconsRemixLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
