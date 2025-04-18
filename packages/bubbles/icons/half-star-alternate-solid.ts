import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesHalfStarAlternateSolidIcon],svg[bubbles-half-star-alternate-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.55.166a1.01 1.01 0 0 0-.941.662L9.075 5.166H4.783a1 1 0 0 0-.642 1.767l3.631 3.01l-1.523 4.572a1 1 0 0 0 1.539 1.124l4.155-3.047a.67.67 0 0 0 .272-.538V.833a.667.667 0 0 0-.666-.667m-.667 11.467a.17.17 0 0 1-.067.133l-2.548 1.867a.167.167 0 0 1-.257-.188l1.17-3.512a.67.67 0 0 0-.206-.724L6.067 6.795a.167.167 0 0 1 .106-.296h3.38a.67.67 0 0 0 .628-.445l.705-1.996z"></svg:path>`,
})
export class BubblesHalfStarAlternateSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
