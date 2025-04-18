import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEqualizerIcon],svg[icon-park-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M11 16V42"></svg:path><svg:path stroke-linecap="round" d="M24 29V42"></svg:path><svg:path stroke-linecap="round" d="M24 19V6"></svg:path><svg:path stroke-linecap="round" d="M37 6V32"></svg:path><svg:path fill="#2F88FF" d="M11 16C13.7614 16 16 13.7614 16 11C16 8.23858 13.7614 6 11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16Z"></svg:path><svg:path fill="#2F88FF" d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z"></svg:path><svg:path fill="#2F88FF" d="M37 42C39.7614 42 42 39.7614 42 37C42 34.2386 39.7614 32 37 32C34.2386 32 32 34.2386 32 37C32 39.7614 34.2386 42 37 42Z"></svg:path></svg:g>`,
})
export class IconParkEqualizerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
