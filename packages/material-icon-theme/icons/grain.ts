import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeGrainIcon],svg[material-icon-theme-grain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffa726" d="m16 2l-4.97 9.782L16 16l5.094-4.218Z"></svg:path><svg:path fill="#f57f17" d="M2 6.848V18.64L16 30l7.228-5.844Z"></svg:path><svg:path fill="#f57c00" d="M30 18.645V6.71L17.334 17.235l7.284 5.808Z"></svg:path>`,
})
export class MaterialIconThemeGrainIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
