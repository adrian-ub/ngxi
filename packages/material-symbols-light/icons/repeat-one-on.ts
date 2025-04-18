import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRepeatOneOnIcon],svg[material-symbols-light-repeat-one-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22q-.413 0-.706-.294T2 21V3q0-.413.294-.706T3 2h18q.413 0 .706.294T22 3v18q0 .413-.294.706T21 22zm4.308-1l.708-.72l-2.089-2.088h12.38v-5h-1v4H5.928l2.089-2.088l-.708-.72L4 17.693zM5.692 10.808h1v-4h11.381l-2.089 2.088l.708.72L20 6.307L16.692 3l-.707.72l2.088 2.088H5.693zm6.116 3.884h.884V9.308h-2.076v.884h1.192z"></svg:path>`,
})
export class MaterialSymbolsLightRepeatOneOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
