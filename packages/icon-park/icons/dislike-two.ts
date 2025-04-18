import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDislikeTwoIcon],svg[icon-park-dislike-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M28 20L20 28L28 20Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 20L20 28"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M20 20.0001L28 28L20 20.0001Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 20.0001L28 28"></svg:path></svg:g>`,
})
export class IconParkDislikeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
