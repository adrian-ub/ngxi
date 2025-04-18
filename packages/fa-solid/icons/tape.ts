import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidTapeIcon],svg[fa-solid-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 192c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64m400 224H380.6c41.5-40.7 67.4-97.3 67.4-160c0-123.7-100.3-224-224-224S0 132.3 0 256s100.3 224 224 224h400c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m-400-64c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96"></svg:path>`,
})
export class FaSolidTapeIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
