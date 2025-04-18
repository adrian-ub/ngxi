import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSmartToyIcon],svg[ic-sharp-smart-toy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9V5h-5V2H9v3H4v4H1v6h3v6h16v-6h3V9zM7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5M16 17H8v-2h8zm-1-4c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13"></svg:path>`,
})
export class IcSharpSmartToyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
