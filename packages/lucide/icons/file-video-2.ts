import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileVideo2Icon],svg[lucide-file-video-2-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></svg:path><svg:path d="M14 2v4a2 2 0 0 0 2 2h4"></svg:path><svg:rect width="8" height="6" x="2" y="12" rx="1"></svg:rect><svg:path d="m10 15.5l4 2.5v-6l-4 2.5"></svg:path></svg:g>`,
})
export class LucideFileVideo2Icon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
