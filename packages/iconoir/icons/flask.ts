import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFlaskIcon],svg[iconoir-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.5 15h-13"></svg:path><svg:path stroke-linecap="round" d="M16 4H8m1 .5v5.76a2 2 0 0 1-.481 1.302L3.48 17.438A2 2 0 0 0 3 18.74V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-.26a2 2 0 0 0-.482-1.302l-5.036-5.876A2 2 0 0 1 15 10.26V4.5m-3 4.51l.01-.011M11 2.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirFlaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
