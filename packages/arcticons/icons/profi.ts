import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsProfiIcon],svg[arcticons-profi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.46 20.028l11.675 10.9L39.931 13.43M21.73 6.046h4.542C41.69 6.046 42.5 20.88 42.5 24s-.81 17.954-16.229 17.954H21.73C6.31 41.954 5.5 27.12 5.5 24S6.31 6.046 21.729 6.046z"></svg:path>`,
})
export class ArcticonsProfiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
