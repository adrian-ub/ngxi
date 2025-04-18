import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightParkOutlineIcon],svg[material-symbols-light-park-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.989 21H11.01v-4H4.885l4-6H6.922L12 3.73L17.077 11h-1.961l4 6h-6.127zM6.75 16h4h-1.9h6.3h-1.9h4zm0 0h10.5l-4-6h1.9L12 5.5L8.85 10h1.9z"></svg:path>`,
})
export class MaterialSymbolsLightParkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
