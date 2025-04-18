import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHippoIcon],svg[icon-park-hippo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="34" height="18" x="7" y="25" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="6"></svg:rect><svg:circle cx="17" cy="34" r="3" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:circle cx="31" cy="34" r="3" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M11 19C11 15.6863 13.6863 13 17 13H31C34.3137 13 37 15.6863 37 19V25H11V19Z"></svg:path><svg:circle cx="20" cy="19" r="2" fill="#fff"></svg:circle><svg:circle cx="28" cy="19" r="2" fill="#fff"></svg:circle><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M18 5C19.6569 5 21 6.34315 21 8L21 13L15 13L15 8C15 6.34315 16.3431 5 18 5Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M30 5C31.6569 5 33 6.34315 33 8L33 13L27 13L27 8C27 6.34315 28.3431 5 30 5Z"></svg:path></svg:g>`,
})
export class IconParkHippoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
