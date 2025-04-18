import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTriangle03Icon],svg[hugeicons-triangle-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 17.336V7.104c0-1.882 0-2.824.569-3.058c.568-.234 1.237.432 2.576 1.762l12.131 12.065c1.339 1.33 2.008 1.996 1.772 2.562c-.235.565-1.181.565-3.074.565H6.684c-1.737 0-2.605 0-3.144-.537c-.54-.536-.54-1.4-.54-3.127m17.916-4.499L17.48 9.42m3.436 3.417c.162-.16.042-1.484.03-2.324m-.03 2.324c-.162.16-.917.052-2.308-.019m-7.479-9.735L14.565 6.5m-3.436-3.417c-.162.16-.042 1.484-.03 2.324m.03-2.324c.162-.16.917-.052 2.308.019m7.473-.018L17.474 6.5m3.436-3.416c-.161-.162-1.493-.042-2.337-.03m2.337.03c.16.16.052.912-.019 2.295"></svg:path><svg:ellipse cx="16.088" cy="8.015" rx="1.383" ry="1.375"></svg:ellipse></svg:g>`,
})
export class HugeiconsTriangle03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
