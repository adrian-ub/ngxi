import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseSettingIcon],svg[hugeicons-database-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="11" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M6 10.842c.602.18 1.274.33 2 .44M3 12c0 1.53 3.054 2.792 7 2.977m-4 2.865c.602.18 1.274.33 2 .44"></svg:path><svg:path d="M11 22c-4.418 0-8-1.343-8-3V5m16 0v6m-2 9.714V22m0-1.286a3.36 3.36 0 0 1-2.774-1.43M17 20.713a3.36 3.36 0 0 0 2.774-1.43M17 14.285c1.157 0 2.176.568 2.774 1.43M17 14.287a3.36 3.36 0 0 0-2.774 1.43M17 14.287V13m4 1.929l-1.226.788M13 20.07l1.226-.788M13 14.93l1.226.788M21 20.07l-1.226-.788m0-3.566a3.12 3.12 0 0 1 0 3.566m-5.548-3.566a3.12 3.12 0 0 0 0 3.566"></svg:path></svg:g>`,
})
export class HugeiconsDatabaseSettingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
