import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBabySymbolIcon],svg[openmoji-baby-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#61b2e4" d="M60 61H12a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h48a1 1 0 0 1 1 1v48a1 1 0 0 1-1 1"></svg:path><svg:path fill="#FFF" d="M40.416 37.653s-1.11-.284-.716.9l-3.618-1.993l1.04-1.18zm-9.959 0s1.109-.284.716.9l3.618-1.993l-1.04-1.18z"></svg:path><svg:path fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M46.2 39.6c-5.3-4.6-10.7-4.233-10.7-4.233S29.9 35 24.6 39.6"></svg:path><svg:path fill="#FFF" d="m31 39l2-4l5.889-.029L40 39z"></svg:path><svg:path fill="#FFF" d="m39 38.6l5.6 11.2s0 1.4-1.4 1.4s-5.6-4.2-5.6-4.2h-2.8h1.4h-2.8s-4.2 4.2-5.6 4.2s-1.4-1.4-1.4-1.4L32 38.6"></svg:path><svg:path fill="#FFF" d="m33.4 47l-2.8-2.8v-2.8h9.8v2.8L37.6 47z"></svg:path><svg:circle cx="36.2" cy="27" r="4.2" fill="#FFF"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M60 61H12a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h48a1 1 0 0 1 1 1v48a1 1 0 0 1-1 1"></svg:path><svg:path d="M47.4 40c-4.536-5.67-11.9-5.684-11.9-5.684S28.136 34.33 23.6 40"></svg:path><svg:path d="m39 38.6l5.6 11.2s0 1.4-1.4 1.4s-5.6-4.2-5.6-4.2h-2.8h1.4h-2.8s-4.2 4.2-5.6 4.2s-1.4-1.4-1.4-1.4L32 38.6"></svg:path><svg:path d="m33.4 47l-2.8-2.8v-2.8h9.8v2.8L37.6 47z"></svg:path><svg:circle cx="36.2" cy="27" r="4.2"></svg:circle></svg:g>`,
})
export class OpenmojiBabySymbolIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
