import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCamera1Icon],svg[tdesign-camera-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a7 7 0 1 0 0 14a7 7 0 0 0 0-14m-9 7a9 9 0 1 1 13.148 7.989L16.805 21H19v2H5v-2h2.195l.657-3.011A9 9 0 0 1 3 10m6.74 8.714L9.243 21h5.516l-.499-2.286A9 9 0 0 1 12 19c-.78 0-1.537-.1-2.26-.286M12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path>`,
})
export class TdesignCamera1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
