import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsWorld2LightIcon],svg[lets-icons-world-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m19.5 6l-1.467 1.1a2 2 0 0 1-1.2.4h-3.358a1.578 1.578 0 0 0-.999 2.799l2 1.636a6 6 0 0 1 2.164 5.306l-.02.18a8 8 0 0 1-.523 2.087L15.5 21m-13-10.5l3.238-.54a2 2 0 0 1 2.302 2.302l-.135.807a3.34 3.34 0 0 0 1.8 3.533a2.5 2.5 0 0 1 1.308 2.846L10.5 21.5"></svg:path><svg:circle cx="12" cy="12" r="9.5"></svg:circle></svg:g>`,
})
export class LetsIconsWorld2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
