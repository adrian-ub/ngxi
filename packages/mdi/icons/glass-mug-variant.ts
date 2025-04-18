import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGlassMugVariantIcon],svg[mdi-glass-mug-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 3C7.56 3 5.85 4.24 5.23 6.08A3.996 3.996 0 0 0 6 14v8h11v-2h3c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-2V8c0-2.21-1.79-4-4-4h-1.68c-.82-.65-1.79-1-2.82-1m0 2c.79 0 1.53.37 2 1H14a2 2 0 0 1 2 2h-4c-2 0-2.68 1.13-3.5 2.63S6 12 6 12c-1.11 0-2-.89-2-2a2 2 0 0 1 2-2h1v-.5A2.5 2.5 0 0 1 9.5 5m7.5 7h2v6h-2Z"></svg:path>`,
})
export class MdiGlassMugVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
