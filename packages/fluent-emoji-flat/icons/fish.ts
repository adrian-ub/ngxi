import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFishIcon],svg[fluent-emoji-flat-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M16.406 5.866c-2.686 0-3.792 2.517-3.842 4.822h-.908a8.66 8.66 0 0 0-8.315 6.242a1.055 1.055 0 0 0-.622 2.015a1.055 1.055 0 0 0 .438 2.05a8.66 8.66 0 0 0 8.5 7.005h1.783c.036.965.51 1.997 1.631 1.997h2.205c.106.018.308-.046.265-.45c-.043-.407-.231-1.236-1.233-1.547h.036a8.66 8.66 0 0 0 8.578-7.488v4.176c0 2.25 4.922 4.625 4.922 2.437v-4.5c0-1.205-2.039-3.26-3.304-3.281c1.265-.021 3.304-2.076 3.304-3.282v-4.5c0-2.187-4.922.188-4.922 2.438v4.176a8.66 8.66 0 0 0-7.03-7.35c3.617-.276 4.209-2.776 4.327-3.9c.1-.95-.375-1.103-.625-1.06z"></svg:path><svg:path fill="#0074BA" d="M11.726 13.804a.5.5 0 0 1 .704-.062c3.05 2.555 3.211 7.049.043 10.398a.5.5 0 1 1-.727-.687c2.832-2.994 2.587-6.812.042-8.945a.5.5 0 0 1-.062-.704"></svg:path><svg:path fill="#1C1C1C" d="M9.078 17.5a.61.61 0 1 1-1.219 0a.61.61 0 0 1 1.22 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFishIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
