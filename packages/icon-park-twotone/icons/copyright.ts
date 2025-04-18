import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCopyrightIcon],svg[icon-park-twotone-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCopyright0"><svg:g fill="none"><svg:circle cx="24" cy="24" r="20" fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path fill="#555" d="M24 17h-4v7h4c3 0 4-2 4-3.5S27 17 24 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 31v-7m0 0v-7h4c3 0 4 2 4 3.5S27 24 24 24h-1m-3 0h3m5 7l-5-7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCopyright0)"></svg:path>`,
})
export class IconParkTwotoneCopyrightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
