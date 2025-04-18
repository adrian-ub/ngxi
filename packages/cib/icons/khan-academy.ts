import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibKhanAcademyIcon],svg[cib-khan-academy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.292 29.86S-1.64 18.073 7.203 9.281C15.219 1.292 27.334.052 29.432 0c0 0 3.256 10.677-4.864 22.776c-8.109 12.099-19.365 8.817-19.365 8.817s11.115-14.167 9.776-14.083c-.932.057-6.765 6.473-11.687 12.353z"></svg:path>`,
})
export class CibKhanAcademyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
