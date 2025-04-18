import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidFaucetIcon],svg[fa-solid-faucet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 256h-38.61c-15.71-13.44-35.46-23.07-57.39-28v-47.56l-32-3.38l-32 3.38V228c-21.93 5-41.68 14.6-57.39 28H16a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h92.79C129.38 421.73 173 448 224 448s94.62-26.27 115.21-64H352a32 32 0 0 1 32 32a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32a160 160 0 0 0-160-160M81.59 159.91l142.41-15l142.41 15c9.42 1 17.59-6.81 17.59-16.8v-30.22c0-10-8.17-17.8-17.59-16.81L256 107.74V80a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v27.74L81.59 96.08C72.17 95.09 64 102.9 64 112.89v30.22c0 9.99 8.17 17.8 17.59 16.8"></svg:path>`,
})
export class FaSolidFaucetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
