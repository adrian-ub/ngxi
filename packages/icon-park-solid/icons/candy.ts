import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCandyIcon],svg[icon-park-solid-candy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCandy0"><svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="24" r="10" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke="#000" stroke-linecap="round" d="M24 28a4 4 0 0 1-4-4"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="m16.688 16.813l-12.78-1.846L14.842 4.033zm14.625 14.5l12.779 1.845l-10.934 10.934z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCandy0)"></svg:path>`,
})
export class IconParkSolidCandyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
