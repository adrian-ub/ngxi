import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWatermelonIcon],svg[hugeicons-watermelon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.887 4.076c1.262 1.476 2.034 3.457 2.034 5.636c0 4.56-3.385 8.257-7.56 8.257c-2.32 0-4.322-1.06-5.683-2.745"></svg:path><svg:path d="m16.418 3.573l-3.062 2.842c-.09.083-.083.227-.002.318c.677.766.694 2.41-.082 3.437c-.827 1.094-2.056.945-2.498.718l-.25.703a.6.6 0 0 1-.643.395l-1.642-.212a.4.4 0 0 0-.338.118L4.98 14.883l-1.4 1.495c-.857.918-.775 2.375.323 2.985c3.474 1.928 9.054 2.969 13.94-1.627c4.515-4.666 3.366-10.328 1.588-13.779c-.587-1.14-2.074-1.257-3.014-.384"></svg:path></svg:g>`,
})
export class HugeiconsWatermelonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
