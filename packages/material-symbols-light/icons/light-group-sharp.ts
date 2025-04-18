import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLightGroupSharpIcon],svg[material-symbols-light-light-group-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 21v-1h7v1zm13.5-.961q-.633 0-1.086-.463q-.452-.462-.452-1.095h-3.423v-.712q0-1.711 1.338-2.88t3.123-1.347V3.981h1v9.561q1.81.177 3.145 1.347q1.336 1.169 1.336 2.88v.712h-3.423q0 .632-.45 1.095T17 20.038M6.5 18.5V11H2.014l1.861-7h6.275l1.862 7H7.5v7.5z"></svg:path>`,
})
export class MaterialSymbolsLightLightGroupSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
