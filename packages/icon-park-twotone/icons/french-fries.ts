import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFrenchFriesIcon],svg[icon-park-twotone-french-fries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFrenchFries0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 22V12a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v9m21 0v-7a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v8m0 0V6a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v16"></svg:path><svg:path fill="#555" stroke-linecap="round" stroke-linejoin="round" d="M7 18s7 5 17 5s17-5 17-5l-4.818 26H11.818z"></svg:path><svg:ellipse cx="24" cy="33" fill="#555" rx="6" ry="3"></svg:ellipse></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFrenchFries0)"></svg:path>`,
})
export class IconParkTwotoneFrenchFriesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
