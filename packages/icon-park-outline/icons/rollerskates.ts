import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRollerskatesIcon],svg[icon-park-outline-rollerskates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M44 4H28v8h16zm0 8v22c0 1.11-.89 2-2 2H8c-2.21 0-4-1.79-4-4v-6c0-4.42 3.58-8 8-8h16v-6zM14 24v-6m7 6v-6m2 0H12M9 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10.33 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10.34 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8M40 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class IconParkOutlineRollerskatesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
