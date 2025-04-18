import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnderpants01Icon],svg[hugeicons-underpants-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m14 17l.346.995c.317.944.476 1.417.844 1.697l.07.05c.383.258.884.258 1.885.258c2.288 0 3.431 0 4.166-.724c.043-.041.089-.09.128-.135c.68-.776.609-1.86.468-4.026c-.23-3.554-.683-6.41-1.121-8.415c-.264-1.209-.396-1.814-.949-2.257S18.6 4 17.231 4H6.769C5.4 4 4.716 4 4.163 4.443S3.478 5.491 3.214 6.7c-.438 2.005-.89 4.861-1.121 8.415c-.14 2.167-.211 3.25.468 4.026c.04.045.085.094.128.135C3.424 20 4.568 20 6.855 20c1.001 0 1.502 0 1.886-.259l.07-.05c.367-.28.526-.752.843-1.696L9.987 17"></svg:path><svg:path d="M8.5 15c.599 1.196 2.218 2.5 3.5 2.5s2.901-1.304 3.5-2.5M3 8h18"></svg:path></svg:g>`,
})
export class HugeiconsUnderpants01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
