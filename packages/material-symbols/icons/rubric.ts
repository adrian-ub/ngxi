import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRubricIcon],svg[material-symbols-rubric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V3h16v10H6v2h5v2H6v2h5v2zm11.4 0l-2.8-2.8l1.4-1.4l1.4 1.4l3.55-3.55l1.4 1.4zM6 11h5V9H6zm7 0h5V9h-5zM6 7h5V5H6zm7 0h5V5h-5z"></svg:path>`,
})
export class MaterialSymbolsRubricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
