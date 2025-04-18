import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPantsPocketsIcon],svg[iconoir-pants-pockets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5.035 3.633a.6.6 0 0 1 .6-.633h12.73a.6.6 0 0 1 .6.633l-.933 16.8a.6.6 0 0 1-.6.567h-2.898a.6.6 0 0 1-.596-.53L12.596 9.065c-.083-.706-1.109-.706-1.192 0L10.062 20.47a.6.6 0 0 1-.596.53H6.568a.6.6 0 0 1-.6-.567z"></svg:path><svg:path d="M5 7.5h1.5a2 2 0 0 0 2-2V3m10 4.5h-1a2 2 0 0 1-2-2V3"></svg:path></svg:g>`,
})
export class IconoirPantsPocketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
