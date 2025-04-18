import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFlutterIcon],svg[catppuccin-flutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width=".264"><svg:path stroke="#91d7e3" stroke-linejoin="round" d="M2.146.38L.422 2.115l.535.53L3.215.381ZM1.22 2.911l.528-.53l.538.528l-.533.534Z"></svg:path><svg:path stroke="#91d7e3" stroke-linejoin="round" d="m1.751 2.38l.534.533l.929-.933l-1.063-.002Z"></svg:path><svg:path stroke="#8aadf4" stroke-linejoin="round" d="M2.285 2.913s-.531.535-.532.53c0-.006.398.398.398.398h1.064Z"></svg:path><svg:path stroke="#8aadf4" d="m3.215 3.841l-.93-.928l-.532.53l.398.398"></svg:path></svg:g>`,
})
export class CatppuccinFlutterIcon {
  readonly viewBox = input("0 0 4.233 4.233")
  readonly width = input("1em")
  readonly height = input("1em")
}
