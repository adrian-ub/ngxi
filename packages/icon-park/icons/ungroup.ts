import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUngroupIcon],svg[icon-park-ungroup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M11.2727 4H4V11.2727H11.2727V4Z"></svg:path><svg:path fill="#2F88FF" d="M43.9998 36.7271H36.7271V43.9998H43.9998V36.7271Z"></svg:path><svg:path fill="#2F88FF" d="M11.2727 24H4V31.2727H11.2727V24Z"></svg:path><svg:path fill="#2F88FF" d="M23.9998 36.7271H16.7271V43.9998H23.9998V36.7271Z"></svg:path><svg:path fill="#2F88FF" d="M31.2727 4H24V11.2727H31.2727V4Z"></svg:path><svg:path fill="#2F88FF" d="M43.9998 16.7271H36.7271V23.9998H43.9998V16.7271Z"></svg:path><svg:path stroke-linecap="round" d="M11.2729 7.63623H24.0002"></svg:path><svg:path stroke-linecap="round" d="M24 40.3638H36.7273"></svg:path><svg:path stroke-linecap="round" d="M11.2729 27.6366H27.6366V11.2729"></svg:path><svg:path stroke-linecap="round" d="M28.8275 20.3633H36.7269M20.3633 36.7269V27.6282V36.7269Z"></svg:path><svg:path stroke-linecap="round" d="M7.63672 11.2725V23.9997"></svg:path><svg:path stroke-linecap="round" d="M40.3633 24V36.7273"></svg:path></svg:g>`,
})
export class IconParkUngroupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
