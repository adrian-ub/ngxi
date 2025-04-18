import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[unjsNitroIcon],svg[unjs-nitro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#unjsNitro4)"><svg:path fill="url(#unjsNitro1)" fill-rule="evenodd" d="M28.173 5.616C22.438-1.107 12.34-1.907 5.617 3.828s-7.524 15.834-1.789 22.557s15.834 7.523 22.557 1.788s7.523-15.834 1.788-22.557m-7.97 8.398c.616 0 1.01.668.7 1.202l-.089.153l-6.038 9.935a.62.62 0 0 1-.529.297h-.576a.604.604 0 0 1-.585-.755l1.638-6.335a.8.8 0 0 0-.774-1h-2.517a.8.8 0 0 1-.774-1l2.472-9.565a.74.74 0 0 1 .716-.544q.061 0 .107.002h2.535a.8.8 0 0 1 .793.908l-.016.114l-.966 5.653a.8.8 0 0 0 .788.935z" clip-rule="evenodd"></svg:path><svg:path fill="url(#unjsNitro2)" fill-rule="evenodd" d="M28.173 5.616C22.438-1.107 12.34-1.907 5.617 3.828s-7.524 15.834-1.789 22.557s15.834 7.523 22.557 1.788s7.523-15.834 1.788-22.557m-7.97 8.398c.616 0 1.01.668.7 1.202l-.089.153l-6.038 9.935a.62.62 0 0 1-.529.297h-.576a.604.604 0 0 1-.585-.755l1.638-6.335a.8.8 0 0 0-.774-1h-2.517a.8.8 0 0 1-.774-1l2.472-9.565a.74.74 0 0 1 .716-.544q.061 0 .107.002h2.535a.8.8 0 0 1 .793.908l-.016.114l-.966 5.653a.8.8 0 0 0 .788.935z" clip-rule="evenodd"></svg:path><svg:mask id="unjsNitro0" width="32" height="33" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><svg:path fill="url(#unjsNitro3)" d="M16 32.001c8.837 0 16-7.163 16-16s-7.163-16-16-16s-16 7.163-16 16s7.163 16 16 16"></svg:path></svg:mask><svg:g filter="url(#unjsNitro5)" mask="url(#unjsNitro0)"><svg:path fill="#fff" d="M.89 10.741a16 16 0 1 0 30.365.434l-4.652 1.471a11.12 11.12 0 1 1-21.106-.3z"></svg:path></svg:g></svg:g><svg:defs><svg:radialgradient id="unjsNitro1" cx="0" cy="0" r="1" gradientTransform="matrix(31.2006 0 0 318.168 3.2 16)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#31B2F3"></svg:stop><svg:stop offset=".474" stop-color="#F27CEC"></svg:stop><svg:stop offset="1" stop-color="#FD6641"></svg:stop></svg:radialgradient><svg:radialgradient id="unjsNitro2" cx="0" cy="0" r="1" gradientTransform="matrix(31.2006 0 0 318.168 3.2 16)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#31B2F3"></svg:stop><svg:stop offset=".474" stop-color="#F27CEC"></svg:stop><svg:stop offset="1" stop-color="#FD6641"></svg:stop></svg:radialgradient><svg:radialgradient id="unjsNitro3" cx="0" cy="0" r="1" gradientTransform="matrix(31.2 0 0 318.162 3.2 16.001)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F27CEC"></svg:stop><svg:stop offset=".484" stop-color="#31B2F3"></svg:stop><svg:stop offset="1" stop-color="#7D7573"></svg:stop></svg:radialgradient><svg:clippath id="unjsNitro4"><svg:path fill="#fff" d="M0 0h32v32H0z"></svg:path></svg:clippath><svg:filter id="unjsNitro5" width="52" height="41.26" x="-10" y=".741" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fegaussianblur result="effect1_foregroundBlur_7_821" stdDeviation="5"></svg:fegaussianblur></svg:filter></svg:defs></svg:g>`,
})
export class UnjsNitroIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
