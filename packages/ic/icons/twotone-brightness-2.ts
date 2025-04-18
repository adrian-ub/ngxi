import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBrightness2Icon],svg[ic-twotone-brightness-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12c0-4.41-3.59-8-8-8c-.34 0-.68.02-1.01.07C10.9 6.23 12 9.05 12 12s-1.1 5.77-3.01 7.93c.33.05.67.07 1.01.07c4.41 0 8-3.59 8-8" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 20.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65M12 12c0-2.95-1.1-5.77-3.01-7.93C9.32 4.02 9.66 4 10 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-.34 0-.68-.02-1.01-.07C10.9 17.77 12 14.95 12 12"></svg:path>`,
})
export class IcTwotoneBrightness2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
