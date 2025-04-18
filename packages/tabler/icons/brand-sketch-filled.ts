import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandSketchFilledIcon],svg[tabler-brand-sketch-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.554 3.004h8.929a2 2 0 0 1 1.647.873l3.536 5.193a2.006 2.006 0 0 1-.173 2.48l-8 8.79a2.007 2.007 0 0 1-2.97 0l-8-8.789a1 1 0 0 1-.13-.175l-.012-.026l-.051-.072a2.01 2.01 0 0 1-.056-2.063l.09-.146l3.541-5.193c.372-.544.987-.87 1.649-.872"></svg:path>`,
})
export class TablerBrandSketchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
