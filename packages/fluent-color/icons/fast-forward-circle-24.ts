import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorFastForwardCircle24Icon],svg[fluent-color-fast-forward-circle-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorFastForwardCircle240)" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"></svg:path><svg:path fill="#212121" d="M12.533 8.883c0-.715.843-1.132 1.454-.72l4.622 3.117a.86.86 0 0 1 0 1.44l-4.622 3.117c-.61.412-1.454-.005-1.454-.72v-2.03l-4.08 2.75c-.61.412-1.453-.005-1.453-.72V8.883c0-.715.843-1.132 1.454-.72l4.08 2.75z"></svg:path><svg:path fill="url(#fluentColorFastForwardCircle241)" d="M12.533 8.883c0-.715.843-1.132 1.454-.72l4.622 3.117a.86.86 0 0 1 0 1.44l-4.622 3.117c-.61.412-1.454-.005-1.454-.72v-2.03l-4.08 2.75c-.61.412-1.453-.005-1.453-.72V8.883c0-.715.843-1.132 1.454-.72l4.08 2.75z"></svg:path><svg:defs><svg:lineargradient id="fluentColorFastForwardCircle240" x1="2.714" x2="16.517" y1="5.75" y2="20.09" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#22918B"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorFastForwardCircle241" x1="9.25" x2="10.957" y1="8.816" y2="17.854" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#E3FFD9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorFastForwardCircle24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
