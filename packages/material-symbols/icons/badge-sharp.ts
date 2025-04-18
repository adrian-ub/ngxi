import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBadgeSharpIcon],svg[material-symbols-badge-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18h6v-.45q0-.425-.238-.788T11.1 16.2q-.5-.225-1.012-.337T9 15.75t-1.088.113T6.9 16.2q-.425.2-.663.563T6 17.55zm8-1.5h4V15h-4zM9 15q.625 0 1.063-.437T10.5 13.5t-.437-1.062T9 12t-1.062.438T7.5 13.5t.438 1.063T9 15m5-1.5h4V12h-4zM2 22V7h7V2h6v5h7v15zm9-13h2V4h-2z"></svg:path>`,
})
export class MaterialSymbolsBadgeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
