import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLeakIcon],svg[zmdi-leak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 0q0 27-18.5 45.5T0 64V0zm171 0q0 97-69 166T0 235v-43q80 0 136-56T192 0zm-86 0q0 62-43.5 105.5T0 149v-42q44 0 75.5-31.5T107 0zm0 384q0-97 69-166t166-69v43q-80 0-136 56t-56 136zm171 0q0-27 18.5-45.5T384 320v64zm-85 0q0-62 43.5-105.5T384 235v42q-44 0-75.5 31.5T277 384z"></svg:path>`,
})
export class ZmdiLeakIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
