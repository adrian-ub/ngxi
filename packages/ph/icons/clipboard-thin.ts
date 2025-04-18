import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phClipboardThinIcon],svg[ph-clipboard-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 36h-38.08a44 44 0 0 0-67.84 0H56a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m-72-8a36 36 0 0 1 36 36v4H92v-4a36 36 0 0 1 36-36m76 188a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h32.83A43.7 43.7 0 0 0 84 64v8a4 4 0 0 0 4 4h80a4 4 0 0 0 4-4v-8a43.7 43.7 0 0 0-4.83-20H200a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhClipboardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
