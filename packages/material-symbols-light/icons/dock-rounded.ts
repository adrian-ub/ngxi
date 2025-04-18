import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDockRoundedIcon],svg[material-symbols-light-dock-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 20.884q0-.213.144-.356q.144-.144.356-.144h6q.213 0 .356.144t.144.357t-.144.356t-.356.144H9q-.213 0-.356-.144t-.144-.357m.122-2.5q-.697 0-1.16-.462T7 16.769V4q0-.69.463-1.153t1.159-.462h6.756q.697 0 1.16.462T17 4v12.77q0 .69-.462 1.152t-1.16.463zM8 14.885h8v-9H8z"></svg:path>`,
})
export class MaterialSymbolsLightDockRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
