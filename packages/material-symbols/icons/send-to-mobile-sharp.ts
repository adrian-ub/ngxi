import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSendToMobileSharpIcon],svg[material-symbols-send-to-mobile-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 16l-1.4-1.4l1.55-1.6H12v-2h5.15L15.6 9.4L17 8l4 4zM5 23V1h14v6h-2V6H7v12h10v-1h2v6z"></svg:path>`,
})
export class MaterialSymbolsSendToMobileSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
