import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsMoodHappySolidIcon],svg[zondicons-mood-happy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20M6.5 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m7 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m2.16 3H4.34a6 6 0 0 0 11.32 0"></svg:path>`,
})
export class ZondiconsMoodHappySolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
