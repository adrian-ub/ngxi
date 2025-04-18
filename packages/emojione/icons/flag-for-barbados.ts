import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForBarbadosIcon],svg[emojione-flag-for-barbados-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2a5f9e" d="M2 32c0 11.5 6.5 21.5 16 26.5v-53c-9.5 5-16 15-16 26.5m60 0c0-11.5-6.5-21.5-16-26.5v53.1c9.5-5.1 16-15.1 16-26.6"></svg:path><svg:path fill="#ffce31" d="M32 2c-5.1 0-9.8 1.3-14 3.5v53.1c4.2 2.2 8.9 3.5 14 3.5s9.8-1.3 14-3.5V5.5C41.8 3.3 37.1 2 32 2"></svg:path><svg:g fill="#3e4347"><svg:path d="m43.8 20.2l-1.1-1.1c-.2.2-4.6 5.2-5.1 15.1h-4.2V23.3h-3v10.9h-4.2c-.4-9.9-4.9-14.9-5.1-15.1L19 21.2s4.3 5 4.3 14.5v1.6h7.2v10.8h3V37.3h7.2v-1.6c0-9.6 4.2-14.5 4.3-14.5z"></svg:path><svg:path d="m32 15.9l-3.2 9.6h6.4zm-10.8 3.2l6.5 6.4h-4zm21.6 0l-6.5 6.4h4z"></svg:path></svg:g>`,
})
export class EmojioneFlagForBarbadosIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
