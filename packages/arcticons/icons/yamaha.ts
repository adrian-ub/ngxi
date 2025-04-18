import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYamahaIcon],svg[arcticons-yamaha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.816 37.663v-21.07c0-1.21.975-2.184 2.186-2.184s2.185.974 2.185 2.185v21.07m-2.185-26.341l1.938-.485L24 5.912l-1.938 4.926zv3.085"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.26 15.277l18.247 10.535c1.048.605 1.405 1.936.8 2.985s-1.937 1.405-2.986.8L11.075 19.061M34.978 30.34l-.548 1.92l5.235.785l-3.297-4.141zl-2.671-1.542"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.925 19.06L18.68 29.595c-1.049.605-2.38.248-2.985-.8s-.249-2.38.8-2.985L34.74 15.275M13.022 30.337l-1.39-1.435l-3.297 4.141l5.235-.784zl2.67-1.542"></svg:path>`,
})
export class ArcticonsYamahaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
