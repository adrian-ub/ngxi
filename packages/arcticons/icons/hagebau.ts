import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHagebauIcon],svg[arcticons-hagebau-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.865 14.247L32.062 5.5h-9.124M6.135 14.247L15.938 5.5h9.124m16.803 28.253L32.062 42.5h-9.124M6.135 33.753l9.803 8.747h9.124M28.97 32v-9.225s.134-1.387-1.546-1.387H19.48M19.027 32V15.825"></svg:path>`,
})
export class ArcticonsHagebauIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
