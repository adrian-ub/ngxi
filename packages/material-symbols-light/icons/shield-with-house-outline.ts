import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShieldWithHouseOutlineIcon],svg[material-symbols-light-shield-with-house-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.962q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615l7 2.615V11.1q0 3.454-1.993 6.21T12 20.963M12 8.89l-5.734 4.465q.455 1.883 1.563 3.43t2.671 2.441V15.5h3v3.727q1.564-.894 2.671-2.441q1.108-1.548 1.564-3.43zm0-4.747L6 6.375V11.1q0 .26.022.573q.022.314.06.573L12 7.635l5.917 4.611q.039-.26.061-.573T18 11.1V6.375z"></svg:path>`,
})
export class MaterialSymbolsLightShieldWithHouseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
