import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSlidersHIcon],svg[la-sliders-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5c-1.293 0-2.395.844-2.813 2H4v2h8.188c.417 1.156 1.519 2 2.812 2s2.395-.844 2.813-2H28V7H17.812C17.395 5.844 16.294 5 15 5m0 2c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m7 6c-1.293 0-2.395.844-2.813 2H4v2h15.188c.417 1.156 1.519 2 2.812 2s2.395-.844 2.813-2H28v-2h-3.188c-.417-1.156-1.519-2-2.812-2m0 2c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m-11 6c-1.293 0-2.395.844-2.813 2H4v2h4.188c.417 1.156 1.519 2 2.812 2s2.395-.844 2.813-2H28v-2H13.812c-.417-1.156-1.519-2-2.812-2m0 2c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaSlidersHIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
