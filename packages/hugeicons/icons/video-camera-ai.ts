import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVideoCameraAiIcon],svg[hugeicons-video-camera-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 15.5v-2l2.6-3.467a1.333 1.333 0 0 1 2.4.8v7.334a1.333 1.333 0 0 1-2.4.8zm-6.53-9.475c.006-.033.054-.033.06 0a4.42 4.42 0 0 0 3.445 3.444c.033.007.033.055 0 .062a4.42 4.42 0 0 0-3.444 3.444c-.007.033-.055.033-.062 0A4.42 4.42 0 0 0 7.025 9.53c-.033-.007-.033-.055 0-.062a4.42 4.42 0 0 0 3.444-3.444"></svg:path><svg:path d="M5.552 7c-.903.117-1.558.344-2.09.78a4 4 0 0 0-.554.555C2 9.44 2 11.085 2 14.372s0 5.06.908 6.166q.25.304.554.554C4.57 22 6.212 22 9.5 22c3.287 0 4.931 0 6.038-.908q.304-.25.554-.554C17 19.43 17 17.788 17 14.5c0-2.182 0-3.64-.265-4.697"></svg:path><svg:path fill="currentColor" d="M15.12 2.31c.085-.413.675-.413.76 0a2.32 2.32 0 0 0 1.81 1.81c.413.085.413.675 0 .76a2.32 2.32 0 0 0-1.81 1.81c-.085.413-.675.413-.76 0a2.32 2.32 0 0 0-1.81-1.81c-.413-.085-.413-.675 0-.76a2.32 2.32 0 0 0 1.81-1.81"></svg:path></svg:g>`,
})
export class HugeiconsVideoCameraAiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
