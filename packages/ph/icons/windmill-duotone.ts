import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWindmillDuotoneIcon],svg[ph-windmill-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 232H80l10.27-71.89l17.63-30l58.46 34.41Z" opacity=".2"></svg:path><svg:path d="M224 224h-41.06l-6.3-44.12l3.24 1.91a16 16 0 0 0 21.91-5.67l12-20.34a16 16 0 0 0-5.67-21.91l-35-20.61l40.69-69.13a16 16 0 0 0-5.67-21.91l-20.34-12a16 16 0 0 0-21.91 5.67l-20.61 35l-69.16-40.67a16 16 0 0 0-21.91 5.67l-12 20.33a16 16 0 0 0 5.67 21.92l35 20.61l-40.67 69.13a16 16 0 0 0 5.67 21.91l20.34 12a15.57 15.57 0 0 0 10.58 2L73.06 224H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16m-24-76.34L188 168l-69.13-40.69l12-20.35ZM179.66 24L200 36l-40.69 69.14L139 93.17ZM56 44.35L68 24l69.14 40.7l-12 20.35ZM76.34 168L56 156l40.69-69.14l20.36 12Zm12.88 56L98 162.8l12.77-21.7L159 169.5l7.79 54.5Z"></svg:path></svg:g>`,
})
export class PhWindmillDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
