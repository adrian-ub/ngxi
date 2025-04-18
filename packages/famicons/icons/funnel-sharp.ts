import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsFunnelSharpIcon],svg[famicons-funnel-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 48l192 240v128l128 48V288L512 48z"></svg:path>`,
})
export class FamiconsFunnelSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
