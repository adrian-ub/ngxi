import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucidePandaIcon],svg[lucide-panda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11.25 17.25h1.5L12 18zM15 12l2 2m1-7.5a.5.5 0 0 0-.5-.5"></svg:path><svg:path d="M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5a8.4 8.4 0 0 0-3.3 0a4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5C2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83"></svg:path><svg:path d="M6 6.5a.495.495 0 0 1 .5-.5M9 12l-2 2"></svg:path></svg:g>`,
})
export class LucidePandaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
