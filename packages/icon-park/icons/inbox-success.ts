import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInboxSuccessIcon],svg[icon-park-inbox-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 30L9 6H39L44 30"></svg:path><svg:path fill="#2F88FF" d="M4 30H14.9091L16.7273 36H31.2727L33.0909 30H44V43H4V30Z"></svg:path><svg:path stroke-linecap="round" d="M19 19.2143L23 24L31 16"></svg:path></svg:g>`,
})
export class IconParkInboxSuccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
