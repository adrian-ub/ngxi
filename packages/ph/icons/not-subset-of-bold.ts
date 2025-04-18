import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotSubsetOfBoldIcon],svg[ph-not-subset-of-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.07 31.12a12 12 0 0 0-16.95.81l-3.7 4.07H128a91.95 91.95 0 0 0-70.2 151.39l-18.68 20.54a12 12 0 1 0 17.76 16.14l18.67-20.53A91.5 91.5 0 0 0 128 220h72a12 12 0 0 0 0-24h-72a67.5 67.5 0 0 1-36.12-10.43l125-137.5a12 12 0 0 0-.81-16.95M60 128a68.07 68.07 0 0 1 68-68h45.6L74.13 169.42A67.62 67.62 0 0 1 60 128"></svg:path>`,
})
export class PhNotSubsetOfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
