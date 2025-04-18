import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFireExtinguisherIcon],svg[icon-park-twotone-fire-extinguisher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFireExtinguisher0"><svg:g fill="none"><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 20a8 8 0 1 1 16 0v24H6z"></svg:path><svg:path fill="#555" d="M30 44h12l-6-18z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m36 26l-6 18h12zm0 0v-2c0-7.542 0-11.314-2.343-13.657S27.543 8 20 8h-2m-8 0H6"></svg:path><svg:circle cx="14" cy="8" r="4" fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFireExtinguisher0)"></svg:path>`,
})
export class IconParkTwotoneFireExtinguisherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
