import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibKirbyIcon],svg[cib-kirby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0L1.906 8v16L16 32l14.099-8V8zm6.281 16.339l-3.953 2.13v.292h3.953v3.104H9.718v-3.083h3.943v-.302l-3.953-2.141v-3.818L16 15.912l6.286-3.396v3.823z"></svg:path>`,
})
export class CibKirbyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
