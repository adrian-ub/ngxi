import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLibrary20Icon],svg[fluent-color-library-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLibrary200)" d="M2 3.498C2 2.67 2.671 2 3.5 2h1c.827 0 1.499.67 1.499 1.498v12.981c0 .828-.672 1.498-1.5 1.498h-1c-.828 0-1.499-.67-1.499-1.498z"></svg:path><svg:path fill="url(#fluentColorLibrary201)" d="M7 3.498C7 2.67 7.671 2 8.5 2h1c.827 0 1.499.67 1.499 1.498v12.981c0 .828-.672 1.498-1.5 1.498h-1c-.828 0-1.499-.67-1.499-1.498z"></svg:path><svg:path fill="url(#fluentColorLibrary202)" d="M15.718 6.157a1.5 1.5 0 0 0-1.87-1.106l-.745.21a1.5 1.5 0 0 0-1.06 1.741l2.003 9.8a1.5 1.5 0 0 0 1.839 1.151l.985-.25c.79-.2 1.274-.994 1.092-1.787z"></svg:path><svg:path fill="url(#fluentColorLibrary203)" d="M6 7H2V5h4z"></svg:path><svg:path fill="url(#fluentColorLibrary204)" d="m12.32 8.357l3.729-.761l.45 1.954l-3.78.76z"></svg:path><svg:path fill="url(#fluentColorLibrary205)" d="M7 7h4V5H7z"></svg:path><svg:defs><svg:lineargradient id="fluentColorLibrary200" x1="7.52" x2="9.504" y1="4.994" y2="22.351" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#43E5CA"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLibrary201" x1="7.52" x2="9.504" y1="4.994" y2="22.351" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#43E5CA"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLibrary202" x1="7.52" x2="9.504" y1="4.994" y2="22.351" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#43E5CA"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLibrary203" x1="7" x2="11" y1="4.089" y2="6.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9FF0F9"></svg:stop><svg:stop offset="1" stop-color="#6CE0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLibrary204" x1="7" x2="11" y1="4.089" y2="6.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9FF0F9"></svg:stop><svg:stop offset="1" stop-color="#6CE0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLibrary205" x1="7" x2="11" y1="4.089" y2="6.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9FF0F9"></svg:stop><svg:stop offset="1" stop-color="#6CE0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorLibrary20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
