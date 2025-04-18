import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRouterOneIcon],svg[icon-park-twotone-router-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTRouterOne0"><svg:g fill="none"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M10 24L4 38h40l-6-14z"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="M10 4v20z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 4v20"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="M38 4v20z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 4v20"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="M24 4v20z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 4v20M4 38v6h40v-6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRouterOne0)"></svg:path>`,
})
export class IconParkTwotoneRouterOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
