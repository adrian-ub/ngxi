import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMedicalFilesReportHistoryIcon],svg[streamline-medical-files-report-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4z"></svg:path><svg:path d="M6.303 4.771a.43.43 0 0 0-.43.43v1.208H4.666a.43.43 0 0 0-.43.429v1.395c0 .238.193.43.43.43h1.207V9.87c0 .238.193.43.43.43h1.395a.43.43 0 0 0 .43-.43V8.663h1.207a.43.43 0 0 0 .43-.43V6.838a.43.43 0 0 0-.43-.43H8.128V5.202a.43.43 0 0 0-.43-.43H6.303Z"></svg:path></svg:g>`,
})
export class StreamlineMedicalFilesReportHistoryIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
