import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiJapanesesymbolforbeginnerIcon],svg[fxemoji-japanesesymbolforbeginner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DEE254" d="M256 493.949L97.703 364.844a17.6 17.6 0 0 1-4.648-11.913V40.599c0-8.042 9.902-11.865 15.307-5.91L256 154.514z"></svg:path><svg:path fill="#00D1AE" d="m256 493.949l158.297-129.105a17.6 17.6 0 0 0 4.648-11.913V40.599c0-8.042-9.902-11.865-15.307-5.91L256 154.514z"></svg:path><svg:path fill="#2B3B47" d="M256 509.828a15.85 15.85 0 0 1-10.093-3.62L82.962 372.054a15.88 15.88 0 0 1-5.786-12.259V17.822A15.88 15.88 0 0 1 103.26 5.657L256 133.788L408.74 5.657a15.877 15.877 0 0 1 26.084 12.165v341.973c0 4.746-2.123 9.242-5.786 12.259L266.093 506.208a15.85 15.85 0 0 1-10.093 3.62M108.934 352.3L256 473.381L403.066 352.3V51.869l-136.861 114.81a15.88 15.88 0 0 1-20.41 0L108.934 51.869z"></svg:path>`,
})
export class FxemojiJapanesesymbolforbeginnerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
