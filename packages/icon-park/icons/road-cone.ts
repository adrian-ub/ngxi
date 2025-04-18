import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRoadConeIcon],svg[icon-park-road-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M27 6H21L19.75 10.5L18.5 15L16 24L13.5 33L12.25 37.5L11 42H37L35.5 36.6L32 24L29.5 15L28.25 10.5L27 6Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 42L35.5 36.6L32 24L29.5 15L28.25 10.5L27 6H21L19.75 10.5L18.5 15L16 24L13.5 33L12.25 37.5L11 42M37 42H11H37ZM37 42H6H11H37ZM37 42H42H37Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13.5 33H34.5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 24H16"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29.5 15H18.5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28.25 10.5L35.5 36.6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12.25 37.5L19.75 10.5"></svg:path></svg:g>`,
})
export class IconParkRoadConeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
