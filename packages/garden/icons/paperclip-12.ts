import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPaperclip12Icon],svg[garden-paperclip-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M2.5 4v4.5c0 1.7 1.3 3 3 3s3-1.3 3-3v-6c0-1.1-.9-2-2-2s-2 .9-2 2v6c0 .6.4 1 1 1s1-.4 1-1V4"></svg:path>`,
})
export class GardenPaperclip12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
