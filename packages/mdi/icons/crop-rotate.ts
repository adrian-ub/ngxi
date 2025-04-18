import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCropRotateIcon],svg[mdi-crop-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.47 21.5C4.2 19.93 1.86 16.76 1.5 13H0c.5 6.16 5.66 11 11.95 11c.23 0 .44 0 .66-.03L8.8 20.15zM12.05 0c-.23 0-.44 0-.66.04l3.81 3.81l1.33-1.35c3.27 1.57 5.61 4.74 5.97 8.5H24c-.5-6.16-5.66-11-11.95-11M16 14h2V8a2 2 0 0 0-2-2h-6v2h6zm-8 2V4H6v2H4v2h2v8a2 2 0 0 0 2 2h8v2h2v-2h2v-2z"></svg:path>`,
})
export class MdiCropRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
