import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGoogleWifiOutlineIcon],svg[material-symbols-google-wifi-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.6 10h14.8l-.275-4H4.875zm-.45 7h15.7l-.325-5H4.475zM5 20l-.325-1H4.15q-.875 0-1.463-.625t-.537-1.5l.725-11q.05-.8.625-1.338T4.875 4h14.25q.8 0 1.375.537t.625 1.338l.725 11q.05.875-.537 1.5T19.85 19h-.525L19 20z"></svg:path>`,
})
export class MaterialSymbolsGoogleWifiOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
