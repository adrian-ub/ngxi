import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRefreshOneIcon],svg[icon-park-twotone-refresh-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTRefreshOne0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:rect width="10" height="10" x="17" y="24.071" fill="#555" stroke-linejoin="round" rx="2" transform="rotate(-45 17 24.071)"></svg:rect><svg:path d="M40.12 16c-2.945-5.927-9.06-10-16.129-10C16.924 6 10.945 10.073 8 16m0-8v8m6.78 0H8m0 16c2.945 5.927 9.061 10 16.129 10c7.067 0 13.046-4.073 15.991-10m0 8v-8m-6.78 0h6.78"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRefreshOne0)"></svg:path>`,
})
export class IconParkTwotoneRefreshOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
