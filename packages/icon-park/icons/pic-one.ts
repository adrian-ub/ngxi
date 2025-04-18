import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPicOneIcon],svg[icon-park-pic-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="24" r="20" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 37L17 28L33 41"></svg:path><svg:circle cx="18" cy="17" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 33L32 23L42 31"></svg:path></svg:g>`,
})
export class IconParkPicOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
