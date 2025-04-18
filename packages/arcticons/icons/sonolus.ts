import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSonolusIcon],svg[arcticons-sonolus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 9.5v4h37v-8h-33a4 4 0 0 0-4 4m0 4v11a4 4 0 0 0 4 4h33v-4a4 4 0 0 0-4-4h-25v-7zm29 15v6h-29v8h33a4 4 0 0 0 4-4v-10z"></svg:path>`,
})
export class ArcticonsSonolusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
