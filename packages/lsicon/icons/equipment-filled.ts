import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconEquipmentFilledIcon],svg[lsicon-equipment-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2a.5.5 0 0 0-.5.5V13H2v1h6v-1.5H4V3h8v1h1V2.5a.5.5 0 0 0-.5-.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zm1.5 7.5h1v-1h-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconEquipmentFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
