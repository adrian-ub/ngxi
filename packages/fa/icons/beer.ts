import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBeerIcon],svg[fa-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 768V384H320v256q0 53 37.5 90.5T448 768zm1024 448v192H448v-192l128-192H448q-159 0-271.5-112.5T64 640V320L0 256l32-128h480L544 0h960l32 192l-64 32v800z"></svg:path>`,
})
export class FaBeerIcon {
  readonly viewBox = input("0 0 1600 1408")
  readonly width = input("1.14em")
  readonly height = input("1em")
}
