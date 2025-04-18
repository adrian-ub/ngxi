import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSkatingIcon],svg[icon-park-solid-skating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSkating0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path stroke="#fff" d="M44 4H28v8h16z"></svg:path><svg:path fill="#fff" stroke="#fff" d="M44 12v22c0 1.11-.89 2-2 2H8c-2.21 0-4-1.79-4-4v-6c0-4.42 3.58-8 8-8h16v-6z"></svg:path><svg:path stroke="#000" d="M14 24v-6m7 6v-6"></svg:path><svg:path stroke="#fff" d="M14 44v-8m22 8v-8M23 18H12m32 26H6a2 2 0 0 1-2-2v-1.37"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSkating0)"></svg:path>`,
})
export class IconParkSolidSkatingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
