import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnlink01Icon],svg[hugeicons-unlink-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12.143 10.691l.207-.207a5.067 5.067 0 1 1 7.166 7.166l-2.866 2.866a5.067 5.067 0 1 1-7.166-7.166l.464-.464"></svg:path><svg:path d="m20.052 11.114l.464-.464a5.067 5.067 0 1 0-7.166-7.166L10.484 6.35a5.067 5.067 0 1 0 7.166 7.166l.207-.207M4.5 4L6 6M2 8l3 1m-2 4.5L5 12"></svg:path></svg:g>`,
})
export class HugeiconsUnlink01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
