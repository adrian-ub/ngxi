import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPantoneIcon],svg[tdesign-pantone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.347.991l3.178 4.455l2.099-.715l1.915 5.602H23V22H1V10.333h1.652zM3.353 12.333l-.003.003H3V20h18v-7.667zm16.072-2L18.388 7.3l-1.604.513l-7.397 2.521zM15.549 6.12l-1.604-2.248l-6.102 4.874zM5.285 15.164H7.29v2.004H5.285z"></svg:path>`,
})
export class TdesignPantoneIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
