import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatCocktailGlassIcon],svg[fluent-emoji-flat-cocktail-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#AEDDFF" d="M27.83 6.91c.47-.54.08-1.38-.64-1.38H4.84c-.72 0-1.1.84-.64 1.38l10.81 12.62v7.32h-3.22c-.98 0-1.77.79-1.77 1.77v.91h12v-.91c0-.98-.79-1.77-1.77-1.77h-3.23v-7.32z"></svg:path><svg:path fill="#C3EF3C" d="M14.44 17.6L8 9.73a.736.736 0 0 1 .57-1.2h14.89c.62 0 .96.72.57 1.2L17.6 17.6c-.82 1-2.34 1-3.16 0"></svg:path><svg:path fill="#F3AD61" d="m17.77 11.653l-.36-.473l-.594.17l-1.27 3.77a.5.5 0 1 0 .949.32z"></svg:path><svg:path fill="#E19747" d="M20.965 2.16a.5.5 0 1 0-.948-.32l-1.81 5.375l.326.398l.617-.063z"></svg:path><svg:path fill="#44911B" d="M17.95 11.66a2.23 2.23 0 1 0 0-4.46a2.23 2.23 0 0 0 0 4.46"></svg:path><svg:path fill="#FF822D" d="M18.24 9.31c-.2.6-.8.93-1.34.75s-.81-.81-.61-1.41s.8-.93 1.34-.75s.81.81.61 1.41"></svg:path></svg:g>`,
})
export class FluentEmojiFlatCocktailGlassIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
