import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDsVideoIcon],svg[arcticons-ds-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.463 9.5h14.968v13.097H16.463zm0 15.903h14.968V38.5H16.463zm18.242-7.484h3.742v3.742h-3.742zm0-7.484h3.742v3.742h-3.742zm0 15.904h3.742v3.742h-3.742zm0 7.484h3.742v3.742h-3.742zM9.553 17.919h3.742v3.742H9.553zm0-7.484h3.742v3.742H9.553zm0 15.904h3.742v3.742H9.553zm0 7.484h3.742v3.742H9.553z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsDsVideoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
