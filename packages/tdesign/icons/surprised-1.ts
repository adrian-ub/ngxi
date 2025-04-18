import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSurprised1Icon],svg[tdesign-surprised-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8-4v4H7V8zm8 0v4h-2V8zm-5 6c-.356 0-1 .452-1 1.5s.644 1.5 1 1.5s1-.452 1-1.5s-.644-1.5-1-1.5m-3 1.5c0-1.713 1.146-3.5 3-3.5s3 1.787 3 3.5s-1.146 3.5-3 3.5s-3-1.787-3-3.5"></svg:path>`,
})
export class TdesignSurprised1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
