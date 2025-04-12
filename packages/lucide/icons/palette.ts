import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePaletteIcon],svg[lucide-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></svg:circle><svg:path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688c0-.437-.18-.835-.437-1.125c-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2"></svg:path></svg:g>`
})
export class LucidePaletteIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
