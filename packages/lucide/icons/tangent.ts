import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTangentIcon],svg[lucide-tangent-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="17" cy="4" r="2"></svg:circle><svg:path d="M15.59 5.41L5.41 15.59"></svg:path><svg:circle cx="4" cy="17" r="2"></svg:circle><svg:path d="M12 22s-4-9-1.5-11.5S22 12 22 12"></svg:path></svg:g>`,
})
export class LucideTangentIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
