import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStackOffOutlineIcon],svg[material-symbols-light-stack-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 18.189l-1-1v-6.573q0-.25-.183-.433T19.385 10h-6.573l-1-1h7.573q.666 0 1.14.475t.475 1.14zM14 6.616v-2q0-.25-.183-.433T13.385 4H6.812l-1-1h7.573q.666 0 1.14.475T15 4.615v2zM10.616 20h7.957L10 11.427v7.958q0 .269.173.442t.443.173m9.67 1.713L19.574 21h-8.958q-.686 0-1.15-.464Q9 20.07 9 19.385v-8.958l-4.384-5V14h2v1h-2q-.697 0-1.156-.464Q3 14.07 3 13.385V4.427l-.713-.713L3 3l18 18zm-6-6"></svg:path>`,
})
export class MaterialSymbolsLightStackOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
