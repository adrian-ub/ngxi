import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosChromaIcon],svg[logos-chroma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="170.667" cy="81.92" fill="#FFDE2D" rx="85.333" ry="81.92"></svg:ellipse><svg:ellipse cx="85.333" cy="81.92" fill="#327EFF" rx="85.333" ry="81.92"></svg:ellipse><svg:path fill="#FF6446" d="M170.667 81.92c0 45.243-38.206 81.92-85.334 81.92V81.92zm-85.334 0C85.333 36.677 123.538 0 170.667 0v81.92z"></svg:path>`,
})
export class LogosChromaIcon {
  readonly viewBox = input("0 0 256 164")
  readonly width = input("1.57em")
  readonly height = input("1em")
}
