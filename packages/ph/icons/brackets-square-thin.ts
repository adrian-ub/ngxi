import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBracketsSquareThinIcon],svg[ph-brackets-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 44v168h36a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h40a4 4 0 0 1 0 8Zm172-8h-40a4 4 0 0 0 0 8h36v168h-36a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhBracketsSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
