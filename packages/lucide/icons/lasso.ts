import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLassoIcon],svg[lucide-lasso-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 22a5 5 0 0 1-2-4m-1.7-4A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8s-4.5 8-10 8a12 12 0 0 1-5-1"></svg:path><svg:path d="M5 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class LucideLassoIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
