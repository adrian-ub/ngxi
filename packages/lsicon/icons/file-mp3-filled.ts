import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFileMp3FilledIcon],svg[lsicon-file-mp3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M9.5 10H11V7.5H9V12m3-4.5h2.5v2m0 0h-2m2 0v2H12m-7.5.5V7.5H5l1 3l1-3h.5V12m4 1.5v1h-9v-13h6m0 0v3h3m-3-3H9L11.5 4v.5m0 0V6"></svg:path>`,
})
export class LsiconFileMp3FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
