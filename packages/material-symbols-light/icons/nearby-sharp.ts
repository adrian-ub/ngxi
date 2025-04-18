import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNearbySharpIcon],svg[material-symbols-light-nearby-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.516L8.485 12L12 8.485L15.516 12zm0 5.49L2.975 11.98L12 2.956l9.025 9.025zm0-1.825l7.2-7.2l-7.18-7.2l-7.2 7.2z"></svg:path>`,
})
export class MaterialSymbolsLightNearbySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
