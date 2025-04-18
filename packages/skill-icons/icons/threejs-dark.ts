import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsThreejsDarkIcon],svg[skill-icons-threejs-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4" d="M93.213 222.94L50 48l173.23 49.874z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4" d="m136.583 72.942l21.591 87.496l-86.567-24.945z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4" d="m115.103 147.36l-10.724-43.465l43.008 12.346zM93.65 60.483l10.725 43.465l-43.008-12.346zm86.013 24.777l10.724 43.465l-43.008-12.346zm-64.555 62.13l10.724 43.465l-43.008-12.346z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class SkillIconsThreejsDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
