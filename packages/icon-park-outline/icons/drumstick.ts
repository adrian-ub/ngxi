import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDrumstickIcon],svg[icon-park-outline-drumstick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m14.15 33.82l-1.413 9.9l-8.486-8.486zm9.9-26.87l-9.9 9.9c-4.686 4.686-4.686 12.284 0 16.97v0c4.687 4.687 12.285 4.687 16.97 0l9.9-9.9"></svg:path><svg:ellipse cx="32.535" cy="15.435" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="12" ry="7" transform="rotate(45 32.535 15.435)"></svg:ellipse><svg:circle cx="30.061" cy="11.398" r="2" fill="currentColor" transform="rotate(45 30.06 11.398)"></svg:circle><svg:circle cx="37.132" cy="18.469" r="2" fill="currentColor" transform="rotate(45 37.132 18.47)"></svg:circle><svg:circle cx="31.475" cy="17.055" r="2" fill="currentColor" transform="rotate(45 31.475 17.055)"></svg:circle></svg:g>`,
})
export class IconParkOutlineDrumstickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
