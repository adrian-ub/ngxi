import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideShrubIcon],svg[lucide-shrub-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 22v-7l-2-2"></svg:path><svg:path d="M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0m-3 6l-2 2"></svg:path></svg:g>`,
})
export class LucideShrubIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
