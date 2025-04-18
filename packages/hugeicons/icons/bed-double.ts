import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBedDoubleIcon],svg[hugeicons-bed-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 17.5H2M22 21v-5c0-1.886 0-2.828-.586-3.414S19.886 12 18 12H6c-1.886 0-2.828 0-3.414.586S2 14.114 2 16v5m9-9v-1.787c0-.38-.057-.508-.35-.658C10.04 9.243 9.299 9 8.5 9s-1.54.243-2.15.555c-.293.15-.35.278-.35.658V12m12 0v-1.787c0-.38-.057-.508-.35-.658C17.04 9.243 16.299 9 15.5 9s-1.54.243-2.15.555c-.293.15-.35.278-.35.658V12"></svg:path><svg:path d="M21 12V7.36c0-.691 0-1.037-.192-1.363s-.466-.496-1.014-.834C17.587 3.8 14.9 3 12 3s-5.587.8-7.794 2.163c-.548.338-.822.507-1.014.834S3 6.669 3 7.36V12"></svg:path></svg:g>`,
})
export class HugeiconsBedDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
