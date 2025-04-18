import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDevicesOtherIcon],svg[material-symbols-light-devices-other-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.73 19H4.617q-.667 0-1.141-.475T3 17.386V6.615q0-.666.475-1.14T4.615 5H19v1H4.616q-.27 0-.443.173T4 6.616v10.769q0 .269.173.442t.443.173H6.73zm4.155-1.884q.625 0 1.062-.438t.438-1.062t-.438-1.063t-1.062-.437t-1.063.437t-.437 1.063t.437 1.062t1.063.438M9.5 19v-1.448q-.456-.329-.728-.836q-.272-.508-.272-1.1t.272-1.1t.728-.837V12.23h2.77v1.448q.455.329.727.836q.272.508.272 1.1t-.272 1.1t-.728.837V19zm10.692 0h-4.346q-.343 0-.575-.232t-.232-.576V9.808q0-.343.232-.576T15.846 9h4.346q.344 0 .576.232t.232.576v8.384q0 .344-.232.576t-.576.232"></svg:path>`,
})
export class MaterialSymbolsLightDevicesOtherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
