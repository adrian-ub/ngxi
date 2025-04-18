import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLamp02Icon],svg[hugeicons-lamp-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.924 12.102c.464-.664-1.336-2.896-1.85-3.29c-.469-.36-1.074-.538-2.284-.894S13.287 7 12 7s-2.581.562-3.79.918s-1.815.535-2.284.894c-.514.394-2.314 2.627-1.85 3.29c.888 1.271 15.065 1.121 15.848 0"></svg:path><svg:path d="M9 13a3 3 0 1 0 6 0m-3 7v2m3-3l2 1.5M9 19l-2 1.5M12 7V2"></svg:path></svg:g>`,
})
export class HugeiconsLamp02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
