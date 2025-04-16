import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideChevronsDownUpIcon],svg[lucide-chevrons-down-up-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 20l5-5l5 5M7 4l5 5l5-5"></svg:path>`,
})
export class LucideChevronsDownUpIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
