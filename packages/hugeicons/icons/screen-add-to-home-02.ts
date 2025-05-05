import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScreenAddToHome02Icon],svg[hugeicons-screen-add-to-home-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 17c0 2.357 0 3.535.732 4.268S9.643 22 12 22h3c2.357 0 3.535 0 4.268-.732C20 20.535 20 19.357 20 17V7c0-2.357 0-3.536-.732-4.268C18.535 2 17.357 2 15 2h-3c-2.357 0-3.536 0-4.268.732c-.62.62-.715 1.561-.73 3.268"></svg:path><svg:path d="M15.5 2h-4l.5 1h3zM6 9h5v5m-.5-4.5L4 16"></svg:path></svg:g>`,
})
export class HugeiconsScreenAddToHome02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
