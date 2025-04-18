import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCakeIcon],svg[mynaui-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9 11c1.162 3.722 4.667 4.269 6 0m-6 0c-1.053 3.373-3.462 3.74-5 1.91M15 11c.934 2.992 3.383 3.933 5 1.967"></svg:path><svg:path d="M20 21v-8c0-1.09-.91-2-2-2H6c-1.09 0-2 .91-2 2v8m-2 0h20M7 7v4m5-4v4m5-4v4M7 4v.5m5-.5v.5m5-.5v.5"></svg:path></svg:g>`,
})
export class MynauiCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
