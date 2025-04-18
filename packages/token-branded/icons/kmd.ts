import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKmdIcon],svg[token-branded-kmd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedKmd0)" d="M12 4.687A7.312 7.312 0 1 0 19.312 12c0-.866-.15-1.697-.425-2.465a.844.844 0 0 1 1.588-.57A9 9 0 0 1 12 21a9 9 0 0 1-9-9a9 9 0 0 1 11.754-8.57a.844.844 0 0 1-.516 1.606A7.3 7.3 0 0 0 12 4.687"></svg:path><svg:path fill="url(#tokenBrandedKmd1)" d="M19.312 6.375a1.687 1.687 0 0 1-1.688 1.687c-.483 0-1.014.042-1.355.383l-.526.525c-.59.591-.607 1.526-.438 2.343a3.374 3.374 0 1 1-2.684-2.63c.799.148 1.703.116 2.278-.46l.688-.688c.295-.294.35-.743.35-1.16a1.688 1.688 0 0 1 3.375 0"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedKmd0" x1="17.53" x2="7.845" y1="5.315" y2="19.216" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00ECD2"></svg:stop><svg:stop offset="1" stop-color="#1B456E"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedKmd1" x1="17.252" x2="11.501" y1="6.062" y2="14.315" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00ECD2"></svg:stop><svg:stop offset="1" stop-color="#1B456E"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedKmdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
