import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDevicesOtherOutlineRoundedIcon],svg[material-symbols-light-devices-other-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.667 0-1.141-.475T3 17.386V6.615q0-.666.475-1.14T4.615 5H18.5q.213 0 .356.144t.144.357t-.144.356T18.5 6H4.616q-.27 0-.443.173T4 6.616v10.769q0 .269.173.442t.443.173H6.23q.212 0 .356.144t.144.357t-.144.356T6.23 19zm6.269-1.884q.624 0 1.062-.438t.438-1.062t-.438-1.063t-1.062-.437t-1.063.437t-.437 1.063t.437 1.062t1.063.438M20.191 19h-4.346q-.343 0-.575-.232t-.232-.576V9.808q0-.343.232-.576T15.846 9h4.346q.344 0 .576.232t.232.576v8.384q0 .344-.232.576t-.576.232m-4.153-1H20v-8h-3.962zm-6.539.184v-.632q-.456-.329-.728-.836q-.272-.508-.272-1.1t.272-1.1t.728-.837v-.632q0-.347.232-.582t.576-.234h1.154q.343 0 .575.234t.232.582v.632q.456.329.728.837q.272.507.272 1.1q0 .592-.272 1.1q-.272.507-.728.836v.632q0 .347-.232.582t-.575.234h-1.154q-.343 0-.576-.235t-.232-.58M16.038 18H20z"></svg:path>`,
})
export class MaterialSymbolsLightDevicesOtherOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
