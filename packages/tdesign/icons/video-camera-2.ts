import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVideoCamera2Icon],svg[tdesign-video-camera-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 3a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m4.243 7a5.5 5.5 0 1 0-9.45-5.278A4 4 0 0 0 1.536 10H1v12h17v-2.523l5 2V10.523l-5 2V10zM18 14.677l3-1.2v5.046l-3-1.2zM16 12v8H3v-8zM5 10a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class TdesignVideoCamera2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
