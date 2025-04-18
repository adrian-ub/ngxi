import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinOcamlIcon],svg[catppuccin-ocaml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 8V3c0-.83.67-1.5 1.5-1.5h10c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5H9"></svg:path><svg:path d="m1.5 8l1.14-2.3q.09-.21.36-.24a.8.8 0 0 1 .44.13c.18.12.23.53.28.64c.06.1.64 1.23.85 1.23c.2 0 .71-1.47.71-1.47s.37-.49.72-.49s.55.32.67.49c.12.16.24 1.76.46 2.01s1.32.87 1.67.73c.34-.13.53-.4.63-.73c.1-.34-.14-.75 0-1a1.1 1.1 0 0 1 1.02-.55c.56.03 2.05.56 2.05 1.05q0 .75-1.5.75c-.48 1.33.28 2.22-3 2.25l1 4"></svg:path><svg:path d="m4.5 14.5l1.5-4l1 4zm-2 0l1.5-4l-1.5-.5l-1 1.54V14l1 .49Z"></svg:path></svg:g>`,
})
export class CatppuccinOcamlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
