import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsArrowUpPrintIcon],svg[pepicons-arrow-up-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:g opacity=".8"><svg:path d="M6.848 9.794A1.5 1.5 0 0 1 7.04 7.68l4-3.333a1.5 1.5 0 0 1 1.92 2.304l-4 3.334a1.5 1.5 0 0 1-2.112-.192Z"></svg:path><svg:path d="M17.152 9.794a1.5 1.5 0 0 1-2.112.192l-4-3.334a1.5 1.5 0 1 1 1.92-2.304l4 3.333a1.5 1.5 0 0 1 .192 2.113Z"></svg:path><svg:path d="M12 6a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-3 0v-8A1.5 1.5 0 0 1 12 6Z"></svg:path></svg:g><svg:path d="M5.616 8.653a.5.5 0 0 1 .064-.704l4-3.333a.5.5 0 1 1 .64.768l-4 3.333a.5.5 0 0 1-.704-.064Z"></svg:path><svg:path d="M14.384 8.653a.5.5 0 0 1-.704.064l-4-3.333a.5.5 0 1 1 .64-.768l4 3.333a.5.5 0 0 1 .064.704Z"></svg:path><svg:path d="M10 5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-1 0V5.5A.5.5 0 0 1 10 5Z"></svg:path></svg:g>`,
})
export class PepiconsArrowUpPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
