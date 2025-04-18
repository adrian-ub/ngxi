import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSettingsCuteLineIcon],svg[si-settings-cute-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" clip-path="url(#siSettingsCuteLine0)"><svg:path d="M23 12c0-1.66-1.34-3-3-3h-.76l.54-.54a3 3 0 0 0 0-4.24a3 3 0 0 0-4.24 0l-.54.54V4c0-1.66-1.34-3-3-3S9 2.34 9 4v.76l-.54-.54a3 3 0 0 0-4.24 0a3 3 0 0 0 0 4.24l.54.54H4c-1.66 0-3 1.34-3 3s1.34 3 3 3h.76l-.54.54a3 3 0 0 0 0 4.24a3 3 0 0 0 4.24 0l.54-.54V20c0 1.66 1.34 3 3 3s3-1.34 3-3v-.76l.54.54a3 3 0 0 0 4.24 0a3 3 0 0 0 0-4.24l-.54-.54H20c1.66 0 3-1.34 3-3Z"></svg:path><svg:path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path></svg:g><svg:defs><svg:clippath id="siSettingsCuteLine0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSettingsCuteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
