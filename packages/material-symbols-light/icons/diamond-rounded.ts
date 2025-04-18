import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDiamondRoundedIcon],svg[material-symbols-light-diamond-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.027 8.558h5.946L12.439 3.5h-.877zm2.53 11.119V9.442H3.03zm.885 0l8.53-10.235h-8.53zm3.508-11.12h5.271l-2.075-4.169q-.224-.404-.601-.646t-.847-.242h-4.271zm-13.171 0H8.05L10.573 3.5H6.302q-.47 0-.846.242t-.602.647z"></svg:path>`,
})
export class MaterialSymbolsLightDiamondRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
