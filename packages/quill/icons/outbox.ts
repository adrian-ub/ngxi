import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillOutboxIcon],svg[quill-outbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 16v8c0 1.5 1.5 3 3 3h16c1.5 0 3-1.5 3-3v-8M5 16h5.5s1 3.5 5.5 3.5s5.5-3.5 5.5-3.5H27M5 16v3.5M5 16l2.5-6h2M27 16l-2.5-6h-2m4.5 6v3.5M16 15V4m4 3l-4-4l-4 4"></svg:path>`,
})
export class QuillOutboxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
