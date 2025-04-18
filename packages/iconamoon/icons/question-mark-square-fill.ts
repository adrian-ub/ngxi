import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonQuestionMarkSquareFillIcon],svg[iconamoon-question-mark-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4.001a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm9.707 4.292A1 1 0 0 0 11.998 8a1 1 0 0 0-.705.293a1 1 0 0 1-1.414-1.414a3 3 0 0 1 2.116-.88a3 3 0 0 1 2.126.88A2.994 2.994 0 0 1 13 11.829l.001.167a1 1 0 0 1-2 .008l-.004-1A1 1 0 0 1 11.999 10a1 1 0 0 0 .71-.293A1 1 0 0 0 13 9a1 1 0 0 0-.293-.707M10.5 16a1.5 1.5 0 0 1 1.5-1.5h.01a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5H12a1.5 1.5 0 0 1-1.5-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonQuestionMarkSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
