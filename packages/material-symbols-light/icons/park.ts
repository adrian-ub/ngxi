import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightParkIcon],svg[material-symbols-light-park-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.989 21H11.01v-4H4.885l4-6H6.922L12 3.73L17.077 11h-1.961l4 6h-6.127z"></svg:path>`,
})
export class MaterialSymbolsLightParkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
