import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRollerskatesIcon],svg[icon-park-twotone-rollerskates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTRollerskates0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M44 4H28v8h16z"></svg:path><svg:path fill="#555" d="M44 12v22c0 1.11-.89 2-2 2H8c-2.21 0-4-1.79-4-4v-6c0-4.42 3.58-8 8-8h16v-6z"></svg:path><svg:path d="M14 24v-6m7 6v-6m2 0H12M9 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10.33 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10.34 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8M40 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRollerskates0)"></svg:path>`,
})
export class IconParkTwotoneRollerskatesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
