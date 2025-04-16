import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSaudiRiyalIcon],svg[lucide-saudi-riyal-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 19.5l-5.5 1.2m0-16.7v11.22a1 1 0 0 0 1.242.97L20 15.2M2.978 19.351l5.549-1.363A2 2 0 0 0 10 16V2m10 8L4 13.5"></svg:path>`,
})
export class LucideSaudiRiyalIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
