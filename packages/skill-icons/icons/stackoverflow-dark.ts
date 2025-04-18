import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsStackoverflowDarkIcon],svg[skill-icons-stackoverflow-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path fill="#BCBBBB" d="M183.541 206.378V157.73h21.621V228H43v-70.27h21.622v48.648z"></svg:path><svg:path fill="#F48024" d="m159.216 28l-14.594 10.81l53.513 71.893l14.595-10.811zm24.325 99.459l-68.649-57.297l11.351-13.513l68.649 57.297zm-91.352-17.297L173.27 148l7.568-16.216l-81.081-37.838zm75.676 58.324l3.676-15.945l-87.027-18.109l-3.676 17.892zm-.541 21.676H80.838v-16.216h86.486z"></svg:path></svg:g>`,
})
export class SkillIconsStackoverflowDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
