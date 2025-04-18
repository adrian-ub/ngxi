import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBloodAPOutlineIcon],svg[healthicons-blood-a-p-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M20.923 10.615a1 1 0 0 0-1.846 0l-5 12a1 1 0 0 0 1.846.77L16.917 21h6.166l.994 2.385a1 1 0 0 0 1.846-.77zM20 13.6l2.25 5.4h-4.5z" clip-rule="evenodd"></svg:path><svg:path d="M31 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z"></svg:path><svg:path fill-rule="evenodd" d="M38 34.03c0 2.193-1.79 3.97-4 3.97h-4v2h-5v4h-2v-4h-5v-2h-4c-2.21 0-4-1.777-4-3.97V10.328c0-2.192 1.79-3.97 4-3.97h6l1.132-1.155a4.02 4.02 0 0 1 5.736 0L28 6.358h6c2.21 0 4 1.777 4 3.97zM26.571 7.759a2 2 0 0 0 1.429.6h6c1.12 0 2 .896 2 1.97v17.21a8 8 0 0 0-.925-.625c-1.825-1.062-4.465-1.614-7.583.226c-2.568 1.515-4.983 1.925-7.61 1.98c-1.171.025-2.368-.02-3.651-.069l-.53-.02A69 69 0 0 0 12 28.972V10.327c0-1.073.88-1.97 2-1.97h6a2 2 0 0 0 1.429-.6l1.132-1.155a2.02 2.02 0 0 1 2.878 0zm-10.944 23.27A67 67 0 0 0 12 30.971v3.06c0 1.073.88 1.969 2 1.969h20c1.12 0 2-.896 2-1.97v-3.7a7 7 0 0 0-1.931-1.688c-1.294-.753-3.155-1.2-5.56.22c-2.958 1.744-5.743 2.197-8.585 2.257c-1.234.026-2.494-.021-3.77-.07z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsBloodAPOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
