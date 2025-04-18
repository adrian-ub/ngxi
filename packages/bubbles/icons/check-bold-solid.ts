import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesCheckBoldSolidIcon],svg[bubbles-check-bold-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#bubblesCheckBoldSolid0)"><svg:path fill="currentColor" d="M12.424 2.207L10.94.594a.3.3 0 0 0-.086-.062a.25.25 0 0 0-.29.062L4.298 7.392a.3.3 0 0 1-.087.063a.25.25 0 0 1-.29-.063L2.438 5.78a.3.3 0 0 0-.087-.062a.25.25 0 0 0-.29.062L.579 7.392a.3.3 0 0 0-.078.204a.3.3 0 0 0 .078.204l3.343 3.625a.3.3 0 0 0 .087.063a.25.25 0 0 0 .29-.063l8.126-8.814a.3.3 0 0 0 .076-.202a.3.3 0 0 0-.076-.202"></svg:path></svg:g><svg:defs><svg:clippath id="bubblesCheckBoldSolid0"><svg:path fill="#fff" d="M.5.01h12v12H.5z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class BubblesCheckBoldSolidIcon {
  readonly viewBox = input("0 0 13 12")
  readonly width = input("1.09em")
  readonly height = input("1em")
}
