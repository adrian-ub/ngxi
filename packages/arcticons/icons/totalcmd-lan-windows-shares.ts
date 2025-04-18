import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTotalcmdLanWindowsSharesIcon],svg[arcticons-totalcmd-lan-windows-shares-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 6.722h37v16.904h-37zm24.758 32.246v1.378a.933.933 0 0 1-.932.932H18.674a.933.933 0 0 1-.932-.932v-6.812c0-.515.417-.932.932-.932h10.652c.515 0 .932.417.932.932v1.379m-8.285-11.287h4.055v8.976h-4.055zM17.74 34.913v4.055H7.527A2.03 2.03 0 0 1 5.5 36.941h0c0-1.12.908-2.028 2.027-2.028z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.473 38.968H29.518a2.03 2.03 0 0 1-2.027-2.028h0c0-1.12.907-2.027 2.027-2.027h10.954"></svg:path><svg:circle cx="40.472" cy="36.94" r="2.027" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="8.797" cy="20.284" r="1.29" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsTotalcmdLanWindowsSharesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
