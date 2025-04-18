import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightCheckIcon],svg[mdi-light-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.9 8.1L9 18l-4.95-4.95l.71-.71L9 16.59l9.19-9.2z"></svg:path>`,
})
export class MdiLightCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
