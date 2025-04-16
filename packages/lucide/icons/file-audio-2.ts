import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileAudio2Icon],svg[lucide-file-audio-2-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"></svg:path><svg:path d="M14 2v4a2 2 0 0 0 2 2h4"></svg:path><svg:circle cx="3" cy="17" r="1"></svg:circle><svg:path d="M2 17v-3a4 4 0 0 1 8 0v3"></svg:path><svg:circle cx="9" cy="17" r="1"></svg:circle></svg:g>`,
})
export class LucideFileAudio2Icon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
