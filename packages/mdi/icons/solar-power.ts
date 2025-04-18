import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSolarPowerIcon],svg[mdi-solar-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.45 2v3.55L15 3.77zm-1 6L8 10.46l3.75 1.25zM2 11.45L3.77 15l1.78-3.55zM10 2H2v8c.57.17 1.17.25 1.77.25c3.58.01 6.49-2.9 6.5-6.5c-.01-.59-.1-1.18-.27-1.75m7 20v-6h-3l5-9v6h3z"></svg:path>`,
})
export class MdiSolarPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
