import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggUmbrellaIcon],svg[gg-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 9a8 8 0 1 1 16 0v2h-6.981v9.5a2.5 2.5 0 0 1-5 0v-2.643h2V20.5a.5.5 0 1 0 1 0V11H4zm8-6a6 6 0 0 1 6 6H6a6 6 0 0 1 6-6" clip-rule="evenodd"></svg:path>`,
})
export class GgUmbrellaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
