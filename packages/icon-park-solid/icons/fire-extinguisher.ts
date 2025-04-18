import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFireExtinguisherIcon],svg[icon-park-solid-fire-extinguisher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 20a8 8 0 1 1 16 0v24H6z"></svg:path><svg:path fill="currentColor" d="M30 44h12l-6-18z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m36 26l-6 18h12zm0 0v-2c0-7.542 0-11.314-2.343-13.657S27.543 8 20 8h-2m-8 0H6"></svg:path><svg:circle cx="14" cy="8" r="4" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle></svg:g>`,
})
export class IconParkSolidFireExtinguisherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
