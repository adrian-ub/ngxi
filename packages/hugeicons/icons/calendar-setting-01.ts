import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCalendarSetting01Icon],svg[hugeicons-calendar-setting-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 2v2M6 2v2m15.5 7.5c-.004-3.866-.073-5.872-1.252-7.146C18.996 3 16.98 3 12.95 3h-1.9C7.02 3 5.004 3 3.752 4.354C2.5 5.707 2.5 7.886 2.5 12.244v.513c0 4.357 0 6.536 1.252 7.89c1.2 1.296 3.053 1.35 6.748 1.353M3 8h18"></svg:path><svg:path d="M17.5 20.714V22m0-1.286a3.36 3.36 0 0 1-2.774-1.43m2.774 1.43a3.36 3.36 0 0 0 2.774-1.43M17.5 14.285c1.157 0 2.176.568 2.774 1.43m-2.774-1.43a3.36 3.36 0 0 0-2.774 1.43m2.774-1.43V13m4 1.929l-1.226.788M13.5 20.07l1.226-.788M13.5 14.93l1.226.788M21.5 20.07l-1.226-.788m0-3.566a3.12 3.12 0 0 1 0 3.566m-5.548-3.566a3.12 3.12 0 0 0 0 3.566"></svg:path></svg:g>`,
})
export class HugeiconsCalendarSetting01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
