import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsCsvFileIcon],svg[eos-icons-csv-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.959 20.046H4V4.004h6.979v4.98h4.98V10h2.051V8.014l-2.05-2.052L14 4.004l-1.99-1.99h-8a1.997 1.997 0 0 0-1.99 2l-.01 16a1.997 1.997 0 0 0 1.99 2h14.01v-2Zm5.301-2.032l1.75-6h-1.5l-1 3.43l-1-3.43h-1.5l1.75 6z"></svg:path><svg:path fill="currentColor" d="M10.01 12.014h-3a1.003 1.003 0 0 0-1 1v4a1.003 1.003 0 0 0 1 1h3a1.003 1.003 0 0 0 1-1v-1h-1.5v.5h-2v-3h2v.5h1.5v-1a1.003 1.003 0 0 0-1-1m7 1.506v-1.506h-4a1 1 0 0 0-1 1v1.757a1 1 0 0 0 1 1h2.51v.743h-3.51v1.507h4a1 1 0 0 0 1-1v-1.757a1 1 0 0 0-1-1H13.5v-.743Z"></svg:path>`,
})
export class EosIconsCsvFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
