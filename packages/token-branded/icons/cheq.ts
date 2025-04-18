import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCheqIcon],svg[token-branded-cheq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedCheq0)" d="m5.239 5.972l4.959-2.52a4.1 4.1 0 0 1 2.18-.439c.92.074 3.382 4.245 3.382 4.245a1.16 1.16 0 0 0-.995-.55H4.73c-.546 0-1.059.528-1.255.756c.387-.736.995-1.1 1.763-1.492"></svg:path><svg:path fill="url(#tokenBrandedCheq1)" d="m15.76 7.502l1.175 1.894a2.25 2.25 0 0 0 1.947 1.016c1.064 0 2.08-.81 2.117-1.778a1.5 1.5 0 0 0-.074-.518c-.307-.937-.995-1.614-2.038-2.144l-4.959-2.519a4.1 4.1 0 0 0-1.55-.44c.92.075 3.376 4.483 3.382 4.494z"></svg:path><svg:path fill="url(#tokenBrandedCheq2)" d="M3.005 9.358c0-.672.17-1.323.471-1.895c.19-.227.71-.756 1.255-.756h4.942c-.386 0-.746.19-.963.508l-2.53 3.953a1.5 1.5 0 0 0-.18.365v.01S3.906 14.9 3.747 15.175c-.317.567-.301 1.059-.301 1.059A4.06 4.06 0 0 1 3 14.386V9.358z"></svg:path><svg:path fill="url(#tokenBrandedCheq3)" d="M3.747 15.175c.159-.275 2.25-3.63 2.25-3.63v-.011a1.53 1.53 0 0 0 .19 1.365l2.524 3.647s1.255 2.159 2.197 3.567c.242.402.61.712 1.048.884a4.1 4.1 0 0 1-1.758-.445L5.24 18.028a4.1 4.1 0 0 1-1.794-1.794l.005.01s-.021-.497.302-1.064z"></svg:path><svg:path fill="url(#tokenBrandedCheq4)" d="M10.907 20.113c-.942-1.407-2.064-3.323-2.064-3.323c.217.317.582.503.963.503h10.452a4.7 4.7 0 0 1-1.376.979l-4.959 2.275a4.1 4.1 0 0 1-1.973.45a2.13 2.13 0 0 1-1.048-.884z"></svg:path><svg:path fill="url(#tokenBrandedCheq5)" d="M20.26 17.292c.37-.413.74-1.059.74-1.588c0-1.058-.74-2.117-2.117-2.117c-1.058 0-1.614.53-2.037 1.202l-1.085 1.958a1.16 1.16 0 0 1-.985.545z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedCheq0" x1="14.987" x2="4.159" y1="6.448" y2="6.448" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A53523"></svg:stop><svg:stop offset="1" stop-color="#DD9D1A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCheq1" x1="13.558" x2="20.189" y1="3.019" y2="9.312" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DB991A"></svg:stop><svg:stop offset=".27" stop-color="#D48D1C"></svg:stop><svg:stop offset="1" stop-color="#9C2425"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCheq2" x1="6.339" x2="6.339" y1="6.95" y2="16.243" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A12E24"></svg:stop><svg:stop offset="1" stop-color="#E4AB19"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCheq3" x1="3.456" x2="10.595" y1="16.244" y2="20.578" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#971C26"></svg:stop><svg:stop offset="1" stop-color="#DEA01A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCheq4" x1="19.867" x2="8.187" y1="17.541" y2="17.541" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E3A919"></svg:stop><svg:stop offset="1" stop-color="#9B2225"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCheq5" x1="17.851" x2="17.851" y1="13.709" y2="17.048" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E1A419"></svg:stop><svg:stop offset="1" stop-color="#971C26"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedCheqIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
