import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideWholeWordIcon],svg[lucide-whole-word-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="7" cy="12" r="3"></svg:circle><svg:path d="M10 9v6"></svg:path><svg:circle cx="17" cy="12" r="3"></svg:circle><svg:path d="M14 7v8m8 2v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"></svg:path></svg:g>`,
})
export class LucideWholeWordIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
