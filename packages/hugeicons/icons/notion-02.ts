import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNotion02Icon],svg[hugeicons-notion-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m2.5 3.5l14-1l5 3m-19-2l4 3m-4-3v13l4 5m15-16l-15 1m15-1v14l-15 2m0-15v15"></svg:path><svg:path d="M12.47 17.704L9.5 18.1m9-9.4l-2.235.15m1.235-.083V17l-5.785-7.847L9.5 9.3m1.5-.1v8.5"></svg:path></svg:g>`,
})
export class HugeiconsNotion02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
