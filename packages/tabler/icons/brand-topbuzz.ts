import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandTopbuzzIcon],svg[tabler-brand-topbuzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.417 8.655a.524.524 0 0 1-.405-.622l.986-4.617a.524.524 0 0 1 .626-.404l14.958 3.162c.285.06.467.339.406.622l-.987 4.618a.524.524 0 0 1-.625.404l-4.345-.92q-.296-.061-.353.197l-2.028 9.49a.527.527 0 0 1-.625.404l-4.642-.982a.527.527 0 0 1-.406-.622l2.028-9.493q.056-.255-.204-.31z"></svg:path>`,
})
export class TablerBrandTopbuzzIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
