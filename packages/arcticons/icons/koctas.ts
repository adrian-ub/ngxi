import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKoctasIcon],svg[arcticons-koctas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 38.826h-29V18.553L24 7.575l14.5 10.978zM24 19.769L9.5 30.747m9.988-7.561v15.64m0-9.331H38.5m-9.988 0V10.991m0 12.195l-12.566-9.514"></svg:path>`,
})
export class ArcticonsKoctasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
