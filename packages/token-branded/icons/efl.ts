import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEflIcon],svg[token-branded-efl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedEfl0)" d="m10.939 9.16l-2.415-.542l-.189.722l2.345.55c-.627 2.614-2.034 8.148-2.65 9.372c-.757 1.508-1.744 1.332-1.802 1.1a1.125 1.125 0 0 0-.405-2.175a1.13 1.13 0 0 0-1.13 1.076C4.598 20.582 5.93 21 6.847 21c4-.306 6.34-6.996 7.009-10.303l2.41.588l.196-.762l-2.365-.632c1.052-4.97 2.387-6.473 3.153-6.343a.8.8 0 0 1 .372.162a1.125 1.125 0 0 0 .56 2.102a1.128 1.128 0 0 0 1.116-1.305l-.002-.016a1.1 1.1 0 0 0-.195-.46c-.503-.786-1.675-1.047-2.246-1.03c-3.526.144-5.413 4.166-5.916 6.158"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedEfl0" x1="6.778" x2="18.52" y1="5.755" y2="17.303" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF9B13"></svg:stop><svg:stop offset="1" stop-color="#F58D0B"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedEflIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
