import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextFontInfo16RegularIcon],svg[fluent-text-font-info-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.47 1.827a.5.5 0 0 0-.939 0l-3.5 9.5a.5.5 0 0 0 .938.346L2.954 9h2.253q.149-.524.393-1H3.322L5 3.446l1.293 3.51q.355-.42.785-.762zm5.03 6.048a.625.625 0 1 0 0 1.25a.625.625 0 0 0 0-1.25m0 5.125a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5m0-7a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9m0 8a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7"></svg:path>`,
})
export class FluentTextFontInfo16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
