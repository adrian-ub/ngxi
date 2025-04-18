import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextSuperscriptThinIcon],svg[ph-text-superscript-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 144a4 4 0 0 1-4 4h-48a4 4 0 0 1-3.2-6.4L232 84.05a20 20 0 0 0-18.78-31.85a20 20 0 0 0-16.08 13.14a4 4 0 1 1-7.55-2.67a28.3 28.3 0 0 1 4-7.52a28 28 0 1 1 44.72 33.7L200 140h40a4 4 0 0 1 4 4m-97.38-67a4 4 0 0 0-5.64.4L92 133.89L43 77.38a4 4 0 0 0-6 5.24L86.71 140L37 197.38a4 4 0 1 0 6 5.24l49-56.51l49 56.51a4 4 0 0 0 6-5.24L97.29 140L147 82.62a4 4 0 0 0-.38-5.62"></svg:path>`,
})
export class PhTextSuperscriptThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
