import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsTerraformDarkIcon],svg[skill-icons-terraform-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path fill="#5C4EE5" fill-rule="evenodd" d="M153.497 228v-63.119l-51.429-31.572v63.118zm0-70.017l-51.429-31.572V63.267l51.429 31.572z" clip-rule="evenodd"></svg:path><svg:path fill="#4040B2" fill-rule="evenodd" d="M210.613 126.385V63.241L159.16 94.813v63.144z" clip-rule="evenodd"></svg:path><svg:path fill="#5C4EE5" fill-rule="evenodd" d="M96.43 122.717V59.572L45 28v63.144z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class SkillIconsTerraformDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
