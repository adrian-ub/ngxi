import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBabyTasteIcon],svg[icon-park-solid-baby-taste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSBabyTaste0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c9.941 0 18-8.059 18-18S33.941 8 24 8S6 16.059 6 26s8.059 18 18 18Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 8c-.25-1-2-4-6-4m6 4c.083-1 .6-3.2 2-4"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31 33s-2 4-7 4s-7-4-7-4"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31 33s1.5-4-1-4s-3 7-3 7m6-15h-4m-12-2v4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 24v4m40-4v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSBabyTaste0)"></svg:path>`,
})
export class IconParkSolidBabyTasteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
