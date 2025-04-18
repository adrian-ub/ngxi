import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSnowmanIcon],svg[icon-park-snowman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 24L4 20"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 22V18"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 22L40 18"></svg:path><svg:circle cx="24" cy="10" r="6" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:ellipse cx="24" cy="30" fill="#2F88FF" stroke="#000" stroke-width="4" rx="13" ry="14"></svg:ellipse><svg:circle cx="24" cy="26" r="2" fill="#fff"></svg:circle><svg:circle cx="24" cy="31" r="2" fill="#fff"></svg:circle><svg:circle cx="24" cy="36" r="2" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 20L36 24"></svg:path></svg:g>`,
})
export class IconParkSnowmanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
