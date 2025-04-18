import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiCinemaIcon],svg[arcticons-emoji-cinema-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.89 31.61l5.647 4.602a.806.806 0 0 0 1.315-.625V22.134a.807.807 0 0 0-1.315-.625l-5.647 4.573m-1.618 10.119H12.767a1.62 1.62 0 0 1-1.619-1.619V23.138a1.62 1.62 0 0 1 1.619-1.619h15.505c.894 0 1.618.725 1.618 1.619v11.444a1.62 1.62 0 0 1-1.618 1.62M11.159 15.309a3.7 3.7 0 0 0 7.4.001v0a3.7 3.7 0 0 0-7.4-.005zm11.175 0a3.7 3.7 0 0 0 7.4.003v-.003a3.7 3.7 0 0 0-7.4-.003z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsEmojiCinemaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
