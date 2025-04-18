import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdBackupRestoreIcon],svg[line-md-backup-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate fill="freeze" attributeName="r" begin="0.8s" dur="0.2s" values="0;2"></svg:animate></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M4.25 14c0.89 3.45 4.02 6 7.75 6c4.42 0 8 -3.58 8 -8c0 -4.42 -3.58 -8 -8 -8c-2.39 0 -4.53 1.05 -6 2.71l-2 2.29"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path fill="currentColor" stroke-width="1" d="M5.63 7.38l0 0l0 0l0 0z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M5.63 7.38l0 0l0 0l0 0z;M5.63 7.38L3.5 5.25L3.5 9.5L7.75 9.5z"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path></svg:g>`,
})
export class LineMdBackupRestoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
