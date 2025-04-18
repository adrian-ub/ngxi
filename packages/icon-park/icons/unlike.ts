import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUnlikeIcon],svg[icon-park-unlike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C25.1936 41.9295 26.5616 41.3098 28.0099 40.5"></svg:path><svg:path d="M34.959 27L41.8375 35.5"></svg:path><svg:path d="M41.8375 27L34.959 35.5"></svg:path></svg:g>`,
})
export class IconParkUnlikeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
