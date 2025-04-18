import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMonkeyIcon],svg[icon-park-twotone-monkey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMonkey0"><svg:g fill="none"><svg:path stroke="#fff" stroke-width="4" d="M13.2 21a10.44 10.44 0 0 1-1.2-4.861C12 9.987 17.373 5 24 5s12 4.987 12 11.139c0 1.743-.431 3.392-1.2 4.861"></svg:path><svg:ellipse cx="24" cy="31" fill="#555" stroke="#fff" stroke-width="4" rx="15" ry="12"></svg:ellipse><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M30.518 33.874c-3.67 3.67-9.721 3.566-13.518-.23M12 23c-3.314 0-6-2.239-6-5s2.686-5 6-5m24 10c3.314 0 6-2.239 6-5s-2.686-5-6-5"></svg:path><svg:circle cx="20" cy="14" r="2" fill="#fff"></svg:circle><svg:circle cx="28" cy="14" r="2" fill="#fff"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMonkey0)"></svg:path>`,
})
export class IconParkTwotoneMonkeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
