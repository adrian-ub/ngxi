import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsGatsbyIcon],svg[skill-icons-gatsby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#639" rx="60"></svg:rect><svg:path fill="#fff" d="M228 128h-63.636v18.182H208c-6.364 27.273-26.364 50-52.727 59.091L50.727 100.727C61.637 68.909 92.546 46.182 128 46.182c27.273 0 51.818 13.636 67.273 34.545l13.636-11.818C190.727 44.364 161.636 28 128 28c-47.273 0-87.273 33.636-97.273 78.182l120 120C194.364 215.273 228 175.273 228 128m-200 .909c0 25.455 10 50 29.09 69.091c19.092 19.091 44.546 29.091 69.092 29.091z"></svg:path></svg:g>`,
})
export class SkillIconsGatsbyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
