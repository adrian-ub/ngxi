import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorErrorCircle24Icon],svg[fluent-color-error-circle-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorErrorCircle240)" d="M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12S6.477 2 12 2"></svg:path><svg:path fill="url(#fluentColorErrorCircle241)" d="M12.002 15.004a.999.999 0 1 0 0 1.997a.999.999 0 0 0 0-1.997M12 7a1 1 0 0 0-.993.884L11 8l.002 5.001l.007.117a1 1 0 0 0 1.986 0l.007-.117L13 8l-.007-.117A1 1 0 0 0 12 7"></svg:path><svg:defs><svg:lineargradient id="fluentColorErrorCircle240" x1="5.125" x2="18.25" y1="-1.125" y2="23.875" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFCD0F"></svg:stop><svg:stop offset="1" stop-color="#FE8401"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorErrorCircle241" x1="9.332" x2="14.134" y1="7" y2="17.252" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4A4A4A"></svg:stop><svg:stop offset="1" stop-color="#212121"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorErrorCircle24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
