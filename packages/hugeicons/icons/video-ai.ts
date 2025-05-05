import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVideoAiIcon],svg[hugeicons-video-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.974 15.022a.026.026 0 0 1 .052 0a3.79 3.79 0 0 0 2.953 2.952c.028.006.028.046 0 .052a3.79 3.79 0 0 0-2.953 2.953c-.006.028-.046.028-.052 0a3.79 3.79 0 0 0-2.953-2.953c-.028-.006-.028-.046 0-.052a3.79 3.79 0 0 0 2.953-2.953m-4.327-2.348c.741-.52 1.112-.78 1.26-1.157a1.5 1.5 0 0 0 0-1.032c-.148-.377-.519-.637-1.26-1.157a28 28 0 0 0-1.53-1.01a27 27 0 0 0-1.324-.74c-.788-.414-1.182-.621-1.563-.57a1.32 1.32 0 0 0-.842.513c-.234.323-.264.787-.322 1.715C9.027 9.845 9 10.466 9 11s.027 1.155.066 1.765c.058.928.088 1.392.322 1.715c.195.268.525.469.842.512c.381.052.775-.155 1.563-.57c.466-.245.93-.5 1.324-.739a28 28 0 0 0 1.53-1.01"></svg:path><svg:path d="M21.872 14.836C22 13.923 22 12.728 22 11c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C18.2 3 16.8 3 14 3h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 5.73C2 6.8 2 8.2 2 11s0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C5.8 19 7.2 19 10 19h3.426"></svg:path></svg:g>`,
})
export class HugeiconsVideoAiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
