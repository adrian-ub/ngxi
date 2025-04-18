import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatPillIcon],svg[fluent-emoji-flat-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FCD53F" d="m21.415 21.405l-6.39 6.39a7.63 7.63 0 0 1-10.79 0a7.63 7.63 0 0 1 0-10.79l6.39-6.39l8.642 2.585z"></svg:path><svg:path fill="#F8312F" d="m10.635 10.625l6.39-6.39a7.63 7.63 0 0 1 10.79 0a7.63 7.63 0 0 1 0 10.79l-6.39 6.39z"></svg:path><svg:path fill="#F4F4F4" d="M26 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class FluentEmojiFlatPillIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
