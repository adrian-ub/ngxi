import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFamilyIcon],svg[icon-park-twotone-family-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFamily0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path d="M10 19s-5.143 2-6 9m34-9s5.143 2 6 9m-26-9s4.8 1.167 6 7m6-7s-4.8 1.167-6 7m-4 8s-4.2.75-6 6m14-6s4.2.75 6 6"></svg:path><svg:circle cx="24" cy="31" r="5" fill="#555" stroke-linejoin="round"></svg:circle><svg:circle cx="34" cy="14" r="6" fill="#555" stroke-linejoin="round"></svg:circle><svg:circle cx="14" cy="14" r="6" fill="#555" stroke-linejoin="round"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFamily0)"></svg:path>`,
})
export class IconParkTwotoneFamilyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
