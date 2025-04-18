import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInboxCheckIcon],svg[hugeicons-inbox-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 13.982h-4.926c-.842 0-1.504.704-1.875 1.448c-.403.808-1.21 1.552-2.7 1.552c-1.488 0-2.295-.744-2.699-1.552c-.37-.744-1.032-1.448-1.874-1.448H2m14.66-8.007s.377.116.9.884c0 0 .769-1.658 1.833-2.234"></svg:path><svg:path d="M21.017 12.492c0 4.482 0 6.723-1.393 8.116C18.232 22 15.991 22 11.508 22s-6.723 0-8.116-1.392C2 19.215 2 16.974 2 12.492c0-4.483 0-6.724 1.392-8.116c1.393-1.393 3.634-1.393 8.116-1.393"></svg:path><svg:path d="M22 5.983a3.983 3.983 0 1 1-7.966 0a3.983 3.983 0 0 1 7.966 0"></svg:path></svg:g>`,
})
export class HugeiconsInboxCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
