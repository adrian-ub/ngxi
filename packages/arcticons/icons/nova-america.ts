import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNovaAmericaIcon],svg[arcticons-nova-america-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.053 19.938s9.666-9.321 23.104-11.16c0 0-5.47 5.84-8.455 7.477S6.053 19.937 6.053 19.937Zm29.97 2.412C30.188 16.333 33.74 8.195 33.74 8.195s-7.393 6.187-7.056 9.052s9.339 5.103 9.339 5.103M13.265 39.805C23.902 23.095 43.5 28.254 43.5 28.254s-14.931-6.894-19.904-5.228s-10.331 16.78-10.331 16.78Zm2.288-17.834c2.393 1.483.524 4.304-3.589 14.556c0 0 .511-12.278-7.464-13.592c0 0 8.66-2.446 11.053-.963Z"></svg:path>`,
})
export class ArcticonsNovaAmericaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
