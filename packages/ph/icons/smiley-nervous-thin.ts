import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSmileyNervousThinIcon],svg[ph-smiley-nervous-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92M84 108a8 8 0 1 1 8 8a8 8 0 0 1-8-8m72 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m24 60a4 4 0 0 1-4 4c-8 0-12-5.32-15.2-9.6c-3.07-4.09-5-6.4-8.8-6.4s-5.73 2.31-8.8 6.4c-3.2 4.28-7.2 9.6-15.2 9.6s-12-5.32-15.2-9.6c-3.07-4.09-5-6.4-8.8-6.4s-5.73 2.31-8.8 6.4C92 166.68 88 172 80 172a4 4 0 0 1 0-8c3.81 0 5.73-2.31 8.8-6.4C92 153.32 96 148 104 148s12 5.32 15.2 9.6c3.07 4.09 5 6.4 8.8 6.4s5.73-2.31 8.8-6.4c3.2-4.28 7.2-9.6 15.2-9.6s12 5.32 15.2 9.6c3.07 4.09 5 6.4 8.8 6.4a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhSmileyNervousThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
