import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHeadphonesBatterySharpIcon],svg[material-symbols-light-headphones-battery-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.616 17.5v-5.538q0-2.244 1.571-3.814t3.818-1.571t3.812 1.57t1.567 3.815V17.5h-2.768v-4.384H12.5v-1.154q0-1.875-1.312-3.188T8 7.462T4.813 8.774T3.5 11.962v1.154h1.885V17.5zm13.961 0V7.346H18.5v-.769h1v.77h1.923V17.5z"></svg:path>`,
})
export class MaterialSymbolsLightHeadphonesBatterySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
