import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidMailOpenIcon],svg[heroicons-solid-mail-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.94 6.412A2 2 0 0 0 2 8.108V16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.108a2 2 0 0 0-.94-1.696l-6-3.75a2 2 0 0 0-2.12 0zm2.615 2.423a1 1 0 1 0-1.11 1.664l5 3.333a1 1 0 0 0 1.11 0l5-3.333a1 1 0 0 0-1.11-1.664L10 11.798z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidMailOpenIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
