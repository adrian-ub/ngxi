import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDrumstickIcon],svg[icon-park-solid-drumstick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSDrumstick0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m14.15 33.82l-1.413 9.9l-8.486-8.486z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24.05 6.95l-9.9 9.9c-4.686 4.686-4.686 12.284 0 16.97v0c4.687 4.687 12.285 4.687 16.97 0l9.9-9.9"></svg:path><svg:ellipse cx="32.535" cy="15.435" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="12" ry="7" transform="rotate(45 32.535 15.435)"></svg:ellipse><svg:circle cx="30.061" cy="11.398" r="2" fill="#000" transform="rotate(45 30.06 11.398)"></svg:circle><svg:circle cx="37.132" cy="18.469" r="2" fill="#000" transform="rotate(45 37.132 18.47)"></svg:circle><svg:circle cx="31.475" cy="17.055" r="2" fill="#000" transform="rotate(45 31.475 17.055)"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDrumstick0)"></svg:path>`,
})
export class IconParkSolidDrumstickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
