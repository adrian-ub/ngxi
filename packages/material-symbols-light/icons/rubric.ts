import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRubricIcon],svg[material-symbols-light-rubric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20.039V3.961h14V12.5H6v2.77h5.5v1H6v2.769h5.5v1zm10.4 0l-2.108-2.108l.708-.708l1.4 1.4l3.55-3.55l.708.708zM6 11.5h5.5V8.73H6zm6.5 0H18V8.73h-5.5zM6 7.73h5.5V4.963H6zm6.5 0H18V4.963h-5.5z"></svg:path>`,
})
export class MaterialSymbolsLightRubricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
