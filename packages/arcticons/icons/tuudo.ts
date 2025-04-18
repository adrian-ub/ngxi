import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTuudoIcon],svg[arcticons-tuudo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:rect width="4.551" height="6.029" x="33.95" y="21.521" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.275" ry="2.275"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.852 21.521v3.754a2.275 2.275 0 0 0 2.275 2.276h0a2.275 2.275 0 0 0 2.276-2.276v-3.754m0 3.754v2.275m2.139-6.029v3.754a2.275 2.275 0 0 0 2.275 2.276h0a2.275 2.275 0 0 0 2.275-2.276v-3.754m0 3.754v2.275m-14.398-7.906v7.906M9.5 21.521h2.389m19.857 2.275a2.275 2.275 0 0 0-2.275-2.275h0a2.275 2.275 0 0 0-2.276 2.275v1.48a2.275 2.275 0 0 0 2.276 2.274h0a2.275 2.275 0 0 0 2.275-2.275m0 2.275v-9.1"></svg:path>`,
})
export class ArcticonsTuudoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
