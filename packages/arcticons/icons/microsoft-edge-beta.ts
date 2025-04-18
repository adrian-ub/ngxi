import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftEdgeBetaIcon],svg[arcticons-microsoft-edge-beta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.15 9.5a2 2 0 0 1 0 4h-3.3v-8h3.3a2 2 0 0 1 0 4m0 0h-3.3m-9.07 35.83c-7.357-.08-12.757-7.605-12.757-13.434c0-7.287 5.99-13.245 9.982-13.245c4.451 0 5.43 4.78 5.43 4.78"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.445 4.663a21.5 21.5 0 1 0-9.44 40.837c7.985 0 14.612-4.581 18.684-10.82c.66-.998-.509-1.996-1.557-1.077a15.5 15.5 0 0 1-7.755 2.814c-4.202 0-14.712-2.814-14.712-11.977c0-3.803 2.157-4.78 2.157-4.78"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.545 24.04c0-7.275 7.826-11.358 13.844-11.358s13.105 4.771 13.105 11.359c0 3.194-1.916 2.765-1.916 4.68c0 1.488 2.994 2.496 6.348 2.496c5.43 0 11.977-2.715 11.508-9.372h0a21.5 21.5 0 0 0-2.08-7.308"></svg:path><svg:circle cx="38.5" cy="9.5" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMicrosoftEdgeBetaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
