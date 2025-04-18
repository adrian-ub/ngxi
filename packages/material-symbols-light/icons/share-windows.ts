import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShareWindowsIcon],svg[material-symbols-light-share-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 14.5V9.116q0-.672.472-1.144T9.116 7.5h8.957l-3.075-3.075l.714-.713L20 8l-4.288 4.308l-.714-.708l3.075-3.1H9.115q-.269 0-.442.173t-.173.443V14.5zM5.616 20q-.672 0-1.144-.472T4 18.385V4.615h1v13.77q0 .269.173.442t.443.173h10.769q.269 0 .442-.173t.173-.442V14.5h1v3.885q0 .67-.472 1.143q-.472.472-1.143.472z"></svg:path>`,
})
export class MaterialSymbolsLightShareWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
