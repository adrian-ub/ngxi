import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinJuceIcon],svg[catppuccin-juce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="M9 3c-.5-.5-1.5-.5-2 0s.5 1.5 1 2.5c.5-1 1.5-2 1-2.5"></svg:path><svg:path stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="M9 13c-.5.5-1.5.5-2 0s.5-1.5 1-2.5c.5 1 1.5 2 1 2.5"></svg:path><svg:path stroke="#8bd5ca" stroke-linecap="round" stroke-linejoin="round" d="M3 7c-.5.5-.5 1.5 0 2s1.5-.5 2.5-1c-1-.5-2-1.5-2.5-1"></svg:path><svg:path stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="M13 7c.5.5.5 1.5 0 2s-1.5-.5-2.5-1c1-.5 2-1.5 2.5-1"></svg:path><svg:path stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M5.2 3.8c-.7 0-1.4.7-1.4 1.4s1.4.7 2.4 1c-.3-1-.3-2.4-1-2.4"></svg:path><svg:path stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="M12.2 10.8c0 .7-.7 1.4-1.4 1.4s-.7-1.4-1-2.4c1 .3 2.4.3 2.4 1"></svg:path><svg:path stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round" d="M12.2 5.2c0-.7-.7-1.4-1.4-1.4s-.7 1.4-1 2.4c1-.3 2.4-.3 2.4-1"></svg:path><svg:path stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" d="M5.2 12.2c-.7 0-1.4-.7-1.4-1.4s1.4-.7 2.4-1c-.3 1-.3 2.4-1 2.4"></svg:path><svg:circle cx="8" cy="8" r="7" stroke="#a6da95"></svg:circle><svg:path stroke="#cad3f5" stroke-linejoin="round" d="M7.9 7.9h.2v.2h-.2z"></svg:path></svg:g>`,
})
export class CatppuccinJuceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
