import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRobotIcon],svg[openmoji-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D22F27" d="M34 16.112v-2.51a2.5 2.5 0 0 1 5 0v2.5"></svg:path><svg:path fill="#D0CFCE" d="M13.5 41.101a2.5 2.5 0 0 1-2.5-2.5v-8a2.5 2.5 0 0 1 5 0v8a2.5 2.5 0 0 1-2.5 2.5m45 0a2.5 2.5 0 0 0 2.5-2.5v-8a2.5 2.5 0 0 0-5 0v8a2.5 2.5 0 0 0 2.5 2.5M47.45 56.112h-22.9c-4.703 0-8.55-3.847-8.55-8.55v-22.9c0-4.702 3.847-8.55 8.55-8.55h22.9c4.703 0 8.55 3.848 8.55 8.55v22.9c0 4.703-3.847 8.55-8.55 8.55"></svg:path><svg:path fill="#9B9B9A" d="M35.498 56.112h13.286c3.969 0 7.216-3.848 7.216-8.55V24.661c0-4.702-3.247-8.55-7.216-8.55h-2.352"></svg:path><svg:circle cx="44.835" cy="29.003" r="2.834" fill="#FFF"></svg:circle><svg:circle cx="27.334" cy="29.002" r="2.834" fill="#FFF"></svg:circle><svg:path fill="#FFF" d="M44.5 47.5h-17c-2.2 0-4-1.8-4-4s1.8-4 4-4h17c2.2 0 4 1.8 4 4s-1.8 4-4 4"></svg:path><svg:g fill="none" stroke="#000" stroke-miterlimit="2" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 16.01V13.5a2.5 2.5 0 0 1 2.5-2.5h0a2.5 2.5 0 0 1 2.5 2.5V16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M47.45 56h-22.9C19.847 56 16 52.153 16 47.45v-22.9c0-4.703 3.847-8.55 8.55-8.55h22.9c4.703 0 8.55 3.847 8.55 8.55v22.9c0 4.703-3.847 8.55-8.55 8.55"></svg:path><svg:circle cx="44.835" cy="29.002" r="2.834" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="27.334" cy="29.002" r="2.834" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path d="M44.5 47.5h-17c-2.2 0-4-1.8-4-4s1.8-4 4-4h17c2.2 0 4 1.8 4 4s-1.8 4-4 4z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13.5 41a2.5 2.5 0 0 1-2.5-2.5v-8a2.5 2.5 0 0 1 2.5-2.5h0a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5m45 0a2.5 2.5 0 0 0 2.5-2.5v-8a2.5 2.5 0 0 0-2.5-2.5h0a2.5 2.5 0 0 0-2.5 2.5v8a2.5 2.5 0 0 0 2.5 2.5M28 40v7m5-7v7m5-7v7m5-7v7"></svg:path></svg:g>`,
})
export class OpenmojiRobotIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
