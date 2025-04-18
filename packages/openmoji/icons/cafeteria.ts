import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCafeteriaIcon],svg[openmoji-cafeteria-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M22.81 29.6s-.678-.387-1.162-4.844h6.781s-.29 3.778-1.356 4.844"></svg:path><svg:path fill="#a57939" d="M37.94 55.69h-3.875V33.41l-17.44-.097v-3.68h38.75v3.68l-17.44.097z"></svg:path><svg:path fill="#a57939" d="m47.66 41.24l-.015 14.45h-3.881l.031-18.32h19.38V16.93h3.875v38.75h-3.875V41.25zm-38.798.01v14.43H4.987V16.93h3.875v20.44h19.38v18.31h-3.875V41.25z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M22.8 29.6s-.68-.388-1.164-4.849h6.792s-.291 3.782-1.358 4.849"></svg:path><svg:path d="M37.94 55.69h-3.881V33.38l-17.47-.097v-3.685h38.81v3.685l-17.47.097z"></svg:path><svg:path d="m47.63 41.24l.01 14.45h-3.881V37.36h19.41V16.9h3.88v38.79h-3.88V41.24zM23.39 20.19s.582-1.94 0-3.879m2.71 3.879s.582-1.746 0-3.394m2.14 20.564v18.33h-3.881V41.24H8.839v14.37l-3.881.08V16.9h3.881v20.46z"></svg:path></svg:g>`,
})
export class OpenmojiCafeteriaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
