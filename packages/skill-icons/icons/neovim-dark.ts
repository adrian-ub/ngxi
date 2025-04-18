import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsNeovimDarkIcon],svg[skill-icons-neovim-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path fill="url(#skillIconsNeovimDark0)" fill-rule="evenodd" d="M46 71.006L88.595 28v199.957L46 185.45z" clip-rule="evenodd"></svg:path><svg:path fill="url(#skillIconsNeovimDark1)" fill-rule="evenodd" d="m210.584 71.41l-43.178-43.387l.876 199.935l42.596-42.508z" clip-rule="evenodd"></svg:path><svg:path fill="url(#skillIconsNeovimDark2)" fill-rule="evenodd" d="M88.567 28.033L199.31 197.012L168.32 228L57.52 59.395z" clip-rule="evenodd"></svg:path><svg:path fill="#000" fill-opacity=".13" fill-rule="evenodd" d="m88.605 106.416l-.059 6.656l-34.193-50.48l3.166-3.224z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="skillIconsNeovimDark0" x1="67.297" x2="67.297" y1="28" y2="227.958" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#16B0ED" stop-opacity=".8"></svg:stop><svg:stop offset="1" stop-color="#0F59B2" stop-opacity=".837"></svg:stop></svg:lineargradient><svg:lineargradient id="skillIconsNeovimDark1" x1="189.14" x2="189.14" y1="28.023" y2="227.957" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7DB643"></svg:stop><svg:stop offset="1" stop-color="#367533"></svg:stop></svg:lineargradient><svg:lineargradient id="skillIconsNeovimDark2" x1="128.414" x2="128.414" y1="28.033" y2="228.01" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#88C649" stop-opacity=".8"></svg:stop><svg:stop offset="1" stop-color="#439240" stop-opacity=".84"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class SkillIconsNeovimDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
