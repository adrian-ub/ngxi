import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsPlanetscaleDarkIcon],svg[skill-icons-planetscale-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path fill="#fff" d="M38 128.002C38 78.295 78.295 38 128.002 38c36.547 0 68.007 21.784 82.103 53.076L91.075 210.105a90 90 0 0 1-14.51-8.238l73.866-73.865h-22.429l-63.641 63.641C48.074 175.356 38 152.855 38 128.002m180 .029l-89.971 89.971c49.682-.016 89.954-40.288 89.971-89.971"></svg:path></svg:g>`,
})
export class SkillIconsPlanetscaleDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
