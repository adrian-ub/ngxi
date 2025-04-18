import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInjectionIcon],svg[icon-park-injection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M38.1684 22.262L19.0766 41.3539L6.34863 28.626L25.4405 9.53409" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M38.1684 22.262L19.0766 41.3539L6.34863 28.626L25.4405 9.53409"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M21.9053 5.99854L41.7043 25.7975"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M14.834 28.626L19.0766 32.8686"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M6.34961 41.353L12.7128 34.9898"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M31.8047 15.8979L35.3394 12.3632"></svg:path></svg:g>`,
})
export class IconParkInjectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
