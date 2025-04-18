import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineConvertPdf2Icon],svg[streamline-convert-pdf-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4z"></svg:path><svg:path d="M5.3 3.517C4.006 3.9 9.4 10.4 9.975 8.913s-7.085.43-5.823 1.487S6.593 3.133 5.3 3.517"></svg:path></svg:g>`,
})
export class StreamlineConvertPdf2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
