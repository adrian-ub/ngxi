import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignLeftIcon],svg[icon-park-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="14" x="14.5" y="17" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M6.5 6V42"></svg:path></svg:g>`,
})
export class IconParkAlignLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
