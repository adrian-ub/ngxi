import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatJarIcon],svg[fluent-emoji-flat-jar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#9B9B9B" d="m22 5l-6-1.141L10 5v1l6 1.394L22 6z"></svg:path><svg:path fill="#AEDDFF" d="M7.895 6C6.296 6 5 7.226 5 8.738v18.524C5 28.774 6.296 30 7.895 30h16.21C25.704 30 27 28.774 27 27.262V8.738C27 7.226 25.704 6 24.105 6z"></svg:path><svg:path fill="#BEBEBE" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 8 3.5"></svg:path><svg:rect width="2" height="20" x="22" y="8" fill="#fff" rx="1"></svg:rect><svg:path fill="#9B9B9B" d="M9.999 14A1 1 0 0 0 9 15v5a1 1 0 0 0 .999 1H22a1 1 0 0 0 1-1v-5a1 1 0 0 0-.999-1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatJarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
