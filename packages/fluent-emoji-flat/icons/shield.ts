import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatShieldIcon],svg[fluent-emoji-flat-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E6E6E6" d="M12.096 2a2.78 2.78 0 0 0-1.9.694c-.837.75-.724 1.467-1.471 2.521A2.9 2.9 0 0 1 6.833 6.53l-.03.007a2.63 2.63 0 0 0-1.921 2.356c-.65 5.089 1.1 13 5.322 17.331a24.4 24.4 0 0 0 3.749 2.919a6.53 6.53 0 0 0 4.259 0a22.6 22.6 0 0 0 3.77-2.922c4.087-4.192 5.983-12.138 5.322-17.33a2.59 2.59 0 0 0-1.951-2.364a2.9 2.9 0 0 1-1.892-1.315c-.676-.954-.667-1.8-1.471-2.52a2.78 2.78 0 0 0-1.9-.695z"></svg:path><svg:path fill="#AEDDFF" d="M20.009 3.5H16l-3.214 12.419L16 28.5c2 0 2-.5 4-2c0 0 6.5-4.5 6-17c0 0 .002-1.25-1-1.5c-2.5-.5-3.5-3.5-3.5-3.5c-.132-.334-.5-1-1.491-1"></svg:path><svg:path fill="#00A6ED" d="M12.019 3.5h4.008v25c-2 0-2-.5-4-2c0 0-6.5-4.5-6-17c0 0-.002-1.25 1-1.5c2.5-.5 3.5-3.5 3.5-3.5c.132-.334.5-1 1.492-1"></svg:path></svg:g>`,
})
export class FluentEmojiFlatShieldIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
