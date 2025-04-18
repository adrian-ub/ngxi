import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInvestigationIcon],svg[hugeicons-investigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 9.5V8.3c-.008-2.803-.095-4.289-1.033-5.246C16.933 2 15.269 2 11.942 2h-1.883C6.731 2 5.068 2 4.034 3.054S3 5.806 3 9.2v4.6c0 3.394 0 5.091 1.034 6.146c.918.936 2.332 1.04 4.966 1.052"></svg:path><svg:path d="M18.675 19.689L21 22m-1-5.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0M7 7h8m-8 4h3"></svg:path></svg:g>`,
})
export class HugeiconsInvestigationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
