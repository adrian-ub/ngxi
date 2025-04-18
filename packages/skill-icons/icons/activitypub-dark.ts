import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsActivitypubDarkIcon],svg[skill-icons-activitypub-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path fill="#F1027E" fill-rule="evenodd" d="m137.15 52l86.841 63.279v25.237l-86.841 63.655v-25.236l69.533-50.849l-69.533-50.473z" clip-rule="evenodd"></svg:path><svg:path fill="#F1027E" fill-rule="evenodd" d="m137.15 102.849l34.617 25.237l-34.617 25.236z" clip-rule="evenodd"></svg:path><svg:path fill="#6D6D6D" fill-rule="evenodd" d="M119.841 52L33 115.279v25.237l69.533-50.473v101.322l17.308 12.806zm-34.617 76.086L50.31 153.322l34.617 25.236v-50.472z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class SkillIconsActivitypubDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
