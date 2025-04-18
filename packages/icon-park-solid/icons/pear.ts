import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPearIcon],svg[icon-park-solid-pear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPear0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-width="4" d="M16.64 12.746a8.081 8.081 0 0 1 14.72 0l3.061 6.754l3.686 6.322a9.88 9.88 0 0 1-1.652 12.063l-1.19 1.156a8.013 8.013 0 0 1-10.634.472a1 1 0 0 0-1.262 0a8.013 8.013 0 0 1-10.634-.472l-1.19-1.156a9.88 9.88 0 0 1-1.652-12.063L13.58 19.5z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M21.5 4c.667.5 2.1 1.9 2.5 3.5s.167 3.333 0 4"></svg:path><svg:circle cx="16" cy="28" r="2" fill="#000"></svg:circle><svg:circle cx="18" cy="34" r="2" fill="#000"></svg:circle><svg:circle cx="23" cy="30" r="2" fill="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPear0)"></svg:path>`,
})
export class IconParkSolidPearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
