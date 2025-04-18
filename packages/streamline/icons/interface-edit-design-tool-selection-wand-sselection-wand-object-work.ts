import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditDesignToolSelectionWandSselectionWandObjectWorkIcon],svg[streamline-interface-edit-design-tool-selection-wand-sselection-wand-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l9-9m2-2l1-1M9 2V.5M12 5h1.5M11 7l1 1M6 2l1 1"></svg:path>`,
})
export class StreamlineInterfaceEditDesignToolSelectionWandSselectionWandObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
