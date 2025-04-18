import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsScanAlt2Icon],svg[lets-icons-scan-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 10V9c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.122-2.122C18.396 5 17.93 5 17 5M3 10V9c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.122-2.122C5.605 5 6.07 5 7 5m14 9v1c0 .93 0 1.395-.102 1.776a3 3 0 0 1-2.122 2.122C18.396 19 17.93 19 17 19M3 14v1c0 .93 0 1.395.102 1.776a3 3 0 0 0 2.122 2.122C5.605 19 6.07 19 7 19"></svg:path><svg:path stroke-linecap="round" d="M12 15V9m-4 5v-4m8 4v-4"></svg:path></svg:g>`,
})
export class LetsIconsScanAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
