import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixUngroupObjectsIcon],svg[ix-ungroup-objects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 170.667V192h106.667v-21.333H448V256h-21.333v106.667H448V448h-85.333v-21.333H256V448h-85.333v-85.333H192V256h-21.333v-85.333zm106.667 64H256V256h-21.333v106.667H256V384h106.667v-21.333H384V256h-21.333zM149.333 64v19.2H256V64h85.333v85.333H320v21.334h-42.667v-21.334H256V128H149.333v21.333H128V256h21.333v21.333h21.334V320h-21.334v21.333H64V256h21.333V149.333H64V64z"></svg:path>`,
})
export class IxUngroupObjectsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
