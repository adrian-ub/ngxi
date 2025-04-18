import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAddPicIcon],svg[icon-park-add-pic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"><svg:path d="M38 21V40C38 41.1046 37.1046 42 36 42H8C6.89543 42 6 41.1046 6 40V12C6 10.8954 6.89543 10 8 10H26.3636"></svg:path><svg:path fill="#2F88FF" d="M12.0005 31.0308L18.0005 23L21.0005 26L24.5005 20.5L32.0005 31.0308H12.0005Z"></svg:path><svg:path d="M34.0005 10H42.0005"></svg:path><svg:path d="M37.9946 5.79541V13.7954"></svg:path></svg:g>`,
})
export class IconParkAddPicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
