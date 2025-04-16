import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileVideoIcon],svg[lucide-file-video-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></svg:path><svg:path d="M14 2v4a2 2 0 0 0 2 2h4m-10 3l5 3l-5 3z"></svg:path></svg:g>`,
})
export class LucideFileVideoIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
