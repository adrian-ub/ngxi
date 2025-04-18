import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGramophoneIcon],svg[arcticons-gramophone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m5.206 18.077l17.99-10.485a1.43 1.43 0 0 1 1.442 0l18.156 10.662c.441.255.706.726.706 1.236v9.289c0 .51-.275.98-.716 1.236L24.706 40.412c-.441.255-.98.255-1.422 0L5.216 30.034a1.43 1.43 0 0 1-.716-1.236v-9.475c0-.52.265-.99.706-1.246"></svg:path><svg:path d="M24.245 25.12h3.56l9.82-5.954l-1.874-1.471"></svg:path><svg:ellipse cx="23.235" cy="17.508" rx="3.011" ry="1.501"></svg:ellipse><svg:ellipse cx="23.235" cy="17.508" rx="7.415" ry="3.698"></svg:ellipse></svg:g>`,
})
export class ArcticonsGramophoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
