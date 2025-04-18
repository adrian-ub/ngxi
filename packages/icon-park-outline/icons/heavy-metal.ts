import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHeavyMetalIcon],svg[icon-park-outline-heavy-metal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="m22.219 7.378l11.668 9.244L36.177 24l-10.914 2.085l-12.674-11.554l2.692-5.53z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="m15.28 9.001l11.206 9.6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m25.263 26.085l1.224-7.953l7.4-1.51m-8.894 14.401l2.286 7.08l-11.678 2.276L4 29.014l2.57-6.389l5.458-1.271"></svg:path><svg:path stroke-linecap="round" d="m6.57 22.625l10.714 10.133"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15.601 39.865l1.885-7.733l7.505-1.088"></svg:path><svg:path stroke-linejoin="round" d="M34.887 29.608L34 36.8l9.236-1.801l-1.955-6.812z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkOutlineHeavyMetalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
