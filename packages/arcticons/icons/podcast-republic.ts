import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPodcastRepublicIcon],svg[arcticons-podcast-republic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.191 7.021a21.5 21.5 0 1 0 0 33.958m3.093-2.939a21.5 21.5 0 0 0 0-28.08"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.752 22.564l-11.847-6.84a1.658 1.658 0 0 0-2.486 1.436v13.68a1.658 1.658 0 0 0 2.486 1.436l11.847-6.84a1.658 1.658 0 0 0 0-2.872"></svg:path>`,
})
export class ArcticonsPodcastRepublicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
