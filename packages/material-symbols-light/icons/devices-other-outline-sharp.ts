import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDevicesOtherOutlineSharpIcon],svg[material-symbols-light-devices-other-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.73 19H3V5h16v1H4v12h2.73zm4.155-1.884q.625 0 1.062-.438t.438-1.062t-.438-1.063t-1.062-.437t-1.063.437t-.437 1.063t.437 1.062t1.063.438M21 19h-5.962V9H21zm-4.962-1H20v-8h-3.962zM9.5 19v-1.448q-.456-.329-.728-.836q-.272-.508-.272-1.1t.272-1.1t.728-.837V12.23h2.77v1.448q.455.329.727.836q.272.508.272 1.1t-.272 1.1t-.728.837V19zm6.539-1H20z"></svg:path>`,
})
export class MaterialSymbolsLightDevicesOtherOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
