import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidOnlineMeetingIcon],svg[icon-park-solid-online-meeting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSOnlineMeeting0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M44 8H4v30h15l5 5l5-5h15z"></svg:path><svg:path stroke="#000" d="M12 19v8m8-11v14m8-9v4m8-6v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSOnlineMeeting0)"></svg:path>`,
})
export class IconParkSolidOnlineMeetingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
