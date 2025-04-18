import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFlyingDiscIcon],svg[fluent-emoji-flat-flying-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#26EAFC" d="M22.966 15.54c-9.41-9.95-1.51-11.85 5.29-11.98c.42-.01.77-.35.77-.78s-.35-.78-.78-.78h-13.22c-6.62 0-11.99 5.37-11.99 11.99v5.04l21.48-1.6z"></svg:path><svg:path fill="#0074BA" d="M26.186 25.41c1.77-4.39-1.89-10-8.17-12.52c-6.28-2.53-12.8-1.02-14.57 3.37s1.89 10 8.17 12.52c6.28 2.53 12.8 1.02 14.57-3.37"></svg:path><svg:path fill="#00A6ED" d="M25.696 23.12c1.4-3.49-2-8.14-7.6-10.4s-11.28-1.26-12.68 2.23s2 8.14 7.6 10.4s11.28 1.26 12.68-2.23"></svg:path><svg:path stroke="#26EAFC" stroke-miterlimit="10" stroke-width=".686" d="M23.224 22.152c1.06-2.634-1.515-6.151-5.751-7.857s-8.531-.954-9.591 1.679s1.515 6.15 5.751 7.857s8.531.954 9.591-1.68Z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFlyingDiscIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
