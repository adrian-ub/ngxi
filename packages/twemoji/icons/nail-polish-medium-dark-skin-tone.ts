import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiNailPolishMediumDarkSkinToneIcon],svg[twemoji-nail-polish-medium-dark-skin-tone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#AF7E57" d="M27 36v-4s0-4 4-4s4 4 4 4v4zm-9 0v-9s0-4 4-4s4 4 4 4v9zm-9 0V24s0-4 4-4s4 4 4 4v12zm-9 0v-9s0-4 4-4s4 4 4 4v9z"></svg:path><svg:path fill="#DD2E44" d="M16 24c0-1.657 0-8-3-8s-3 6.343-3 8a3 3 0 1 0 6 0m-9 3c0-1.657 0-8-3-8s-3 6.343-3 8a3 3 0 1 0 6 0m18 0c0-1.657 0-8-3-8s-3 6.343-3 8a3 3 0 0 0 6 0m9 5c0-1.657 0-8-3-8s-3 6.343-3 8a3 3 0 0 0 6 0"></svg:path><svg:path fill="#DD2E44" d="M13 16v4h2s2 0 6-4l-2-2s-2 2-6 2"></svg:path><svg:path fill="#8899A6" d="m19 14l8-8l2 2l-8 8z"></svg:path><svg:path fill="#8899A6" d="M27 6s-2-2 0-4l2-2h7v5l-3 3c-2 2-4 0-4 0z"></svg:path>`,
})
export class TwemojiNailPolishMediumDarkSkinToneIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
