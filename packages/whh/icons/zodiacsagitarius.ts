import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhZodiacsagitariusIcon],svg[whh-zodiacsagitarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.5 576q-26.5 0-45.5-19t-19-45V218L475 640l146 146q19 19 19 45.5T621 877t-45.5 19t-45.5-19L383 731l-273 273q-19 19-45.5 19T19 1004T0 958.5T19 913l273-273l-145-146q-19-19-19-45.5t19-45.5t45.5-19t45.5 19l146 145l420-420H512q-26 0-44.5-19T449 63.5t18.5-45T512 0h448q27 0 45.5 18.5T1024 64v448q0 26-18.5 45t-45 19"></svg:path>`,
})
export class WhhZodiacsagitariusIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
