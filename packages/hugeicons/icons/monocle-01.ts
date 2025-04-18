import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMonocle01Icon],svg[hugeicons-monocle-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 19.141A9.97 9.97 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.97 9.97 0 0 1 7.141 3"></svg:path><svg:path d="M8 15a5 5 0 0 0 4 2c.711 0 1.387-.148 2-.416M8.009 9H8m14 12"></svg:path><svg:circle cx="16" cy="10" r="3"></svg:circle><svg:path d="M22 12c-.207-.396-.311-.594-.448-.767c-.35-.444-.874-.792-1.496-.998c-.244-.08-.514-.132-1.056-.235"></svg:path></svg:g>`,
})
export class HugeiconsMonocle01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
