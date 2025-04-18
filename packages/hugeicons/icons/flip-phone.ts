import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFlipPhoneIcon],svg[hugeicons-flip-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.5 4h-9v11.5a6.5 6.5 0 1 0 13 0V8c0-1.886 0-2.828-.586-3.414S16.386 4 14.5 4M11 18h2"></svg:path><svg:path d="M8.5 8.429c0-.4 0-.599.056-.76a1 1 0 0 1 .614-.613C9.33 7 9.53 7 9.929 7h4.142c.4 0 .599 0 .76.056a1 1 0 0 1 .613.614c.056.16.056.36.056.759V9c0 .464 0 .697-.03.891a2.5 2.5 0 0 1-2.079 2.078C13.197 12 12.464 12 12 12s-1.197 0-1.391-.03A2.5 2.5 0 0 1 8.53 9.89C8.5 9.697 8.5 9.464 8.5 9zM5.5 4V2"></svg:path></svg:g>`,
})
export class HugeiconsFlipPhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
