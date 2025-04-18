import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSunIcon],svg[icon-park-twotone-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="svgIDa"><svg:g fill="none"><svg:path fill="#fff" fill-rule="evenodd" d="M24 3v3.15V3Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 3v3.15"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="m38.85 9.15l-2.228 2.228l2.227-2.227Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m38.85 9.15l-2.228 2.228"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M45 24h-3.15H45Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M45 24h-3.15"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="m38.85 38.85l-2.228-2.228l2.227 2.227Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m38.85 38.85l-2.228-2.228"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M24 45v-3.15V45Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 45v-3.15"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="m9.15 38.85l2.228-2.228l-2.227 2.227Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m9.15 38.85l2.228-2.228"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M3 24h3.15H3Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3 24h3.15"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="m9.15 9.15l2.228 2.228l-2.227-2.227Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m9.15 9.15l2.228 2.228"></svg:path><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M24 36c6.627 0 12-5.373 12-12s-5.373-12-12-12s-12 5.373-12 12s5.373 12 12 12Z"></svg:path></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#svgIDa)"></svg:path>`,
})
export class IconParkTwotoneSunIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
