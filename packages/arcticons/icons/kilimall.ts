import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKilimallIcon],svg[arcticons-kilimall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.842 11.028h24.316c1.25 0 2.211 1.005 2.255 2.253l.95 26.966c.044 1.247-1.006 2.253-2.255 2.253H10.893c-1.25 0-2.3-1.006-2.256-2.253l.95-26.966c.044-1.248 1.006-2.253 2.255-2.253m4.187-.017C17.44 7.657 20.56 5.5 24 5.5c3.445 0 6.568 2.163 7.977 5.525m-11.36 9.477v12.524m0-4.383l6.766-8.142m0 12.525l-5.155-6.262"></svg:path>`,
})
export class ArcticonsKilimallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
