import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineOnlineMeetingIcon],svg[icon-park-outline-online-meeting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M44 8H4v30h15l5 5l5-5h15z"></svg:path><svg:path d="M12 19v8m8-11v14m8-9v4m8-6v8"></svg:path></svg:g>`,
})
export class IconParkOutlineOnlineMeetingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
