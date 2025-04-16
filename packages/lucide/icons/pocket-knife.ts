import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucidePocketKnifeIcon],svg[lucide-pocket-knife-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2s-2 1-2 2s2 1 2 2m13-7h.01M6 18h.01m14.82-9.17a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"></svg:path><svg:path d="M18 11.66V22a4 4 0 0 0 4-4V6"></svg:path></svg:g>`,
})
export class LucidePocketKnifeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
