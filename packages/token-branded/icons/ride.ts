import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRideIcon],svg[token-branded-ride-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F11E99" d="M3.77 6.602c1.905-2.187 6.278-1.112 8.046-.34c-.127-.48.407-1.487 3.568-1.661c3.943-.212 6.267 3.594 5.452 6.008c-.805 2.408-1.89 1.604-2.541 3.97c-.646 2.355-1.816 5.119-4.076 5.876c-1.678.56-4.23 1.222-7.792-1.027c-2.858-1.8-2.107-4.854-1.366-5.929c-1.1-1.355-3.192-4.711-1.291-6.897"></svg:path><svg:path fill="url(#tokenBrandedRide0)" d="M3.733 17.613c-.757-1.948.783-3.547 1.651-4.108l4.346-1.387l2.69 7.178c-2.219.19-2.224.482-3.7.762c-1.472.276-4.04 0-4.987-2.44z"></svg:path><svg:path fill="#873DEE" d="M19.634 16.575c-1.413 3.546-5.15 3.229-7.808 3.229c-1.884 0-4.271.619-5.674-.64a5 5 0 0 1-1.44-2.05C3.67 14.06 5.93 13.43 6.205 11.715c.27-1.725-5.479-9.062 4.018-8.702c10.11.386 10.82 10.01 9.411 13.562"></svg:path><svg:path fill="url(#tokenBrandedRide1)" d="M20.137 12.022a4.7 4.7 0 0 1-.587.582a3.4 3.4 0 0 0-1.229 1.985c-.497 1.81-1.307 3.864-2.683 5.06c-1.059.186-2.17.175-3.176.165h-.614c-.514 0-1.07.058-1.63.116c-1.006.106-2.044.223-2.912 0q-.42-.214-.858-.492a5 5 0 0 1-.72-.545a6.7 6.7 0 0 1-1.26-2.26a4.63 4.63 0 0 1 .218-2.33c.19-.344.428-.65.667-.953c.397-.518.778-1.016.873-1.625c.064-.413-.212-1.148-.55-2.022c-.45-1.175-.996-2.604-.922-3.843c2.15-1.127 5.57-.243 7.083.418c-.127-.487.408-1.492 3.568-1.662c.159-.01.312-.016.466-.01c2.805 1.773 3.996 4.732 4.266 7.41z"></svg:path><svg:path fill="#fff" d="M11.222 6.262c-3.16 0-5.711 2.54-5.711 5.664c0 3.112 2.551 5.653 5.711 5.653c3.155 0 5.707-2.54 5.707-5.658s-2.546-5.66-5.707-5.66M3.78 11.926c0-4.092 3.335-7.395 7.442-7.395c4.103 0 7.438 3.303 7.438 7.39c0 4.091-3.335 7.39-7.438 7.39a7.414 7.414 0 0 1-7.442-7.39z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedRide0" x1="3.992" x2="37.083" y1="13.886" y2="4.542" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4BDAF7"></svg:stop><svg:stop offset="1" stop-color="#6A63E3"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedRide1" x1="6.697" x2="19.142" y1="17.501" y2="9.619" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2424E5"></svg:stop><svg:stop offset="1" stop-color="#781390"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedRideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
