import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFlyingSaucerIcon],svg[fluent-emoji-flat-flying-saucer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#26C9FC" d="M17.48 18.9a6.45 6.45 0 1 0 0-12.9a6.45 6.45 0 0 0 0 12.9"></svg:path><svg:path fill="#FCD53F" d="M19.527 22.04L11.745 20L5 30h15z"></svg:path><svg:path fill="#9B9B9B" d="M2 13.06c1.05 3.56 3.85 6.5 7.7 7.53l10.45 2.8c3.84 1.03 7.75-.12 10.43-2.67l-13.558-5.304z"></svg:path><svg:path fill="#D3D3D3" d="M30.58 20.72c-1.05-3.56-3.85-6.5-7.7-7.53l-10.45-2.8C8.59 9.35 4.68 10.5 2 13.06z"></svg:path><svg:path fill="#fff" d="M21 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="#321B41" d="M9.61 12.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3.08 2.09a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4.09 1.1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4.08 1.09a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5.08.09a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFlyingSaucerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
