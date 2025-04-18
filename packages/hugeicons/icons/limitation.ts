import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLimitationIcon],svg[hugeicons-limitation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 20c-.514.697-.723.94-1.145.993s-.715-.19-1.3-.673C3.381 18.52 2 15.825 2 12.815C2 7.395 6.477 3 12 3s10 4.394 10 9.815c0 3.01-1.381 5.704-3.555 7.505c-.585.484-.877.726-1.3.673c-.422-.053-.631-.296-1.145-.993m-2.5-9.5L18 5"></svg:path><svg:circle cx="12" cy="12" r="1.5"></svg:circle></svg:g>`,
})
export class HugeiconsLimitationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
