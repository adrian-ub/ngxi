import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIntesaIcon],svg[arcticons-intesa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-29 11.11h29"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.867 31.39v-7.908a4.133 4.133 0 0 1 8.266 0v7.909M9.5 31.39v-7.908a4.133 4.133 0 0 1 8.267 0v7.909m12.466-.001v-7.908a4.133 4.133 0 0 1 8.267 0v7.909"></svg:path>`,
})
export class ArcticonsIntesaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
