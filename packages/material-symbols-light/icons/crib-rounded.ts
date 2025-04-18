import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCribRoundedIcon],svg[material-symbols-light-crib-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-1.648 0-3.159-.575T6.077 18.8q-.177-.16-.221-.385t.121-.392q.165-.165.376-.156q.21.01.388.17q.392.367.828.652q.437.284.931.505V15.54H6.616q-.691 0-1.153-.482T5 13.847V8.134q0-1.304.877-2.22Q6.754 5 8 5h2.385q.348 0 .577.23t.23.578v4.096h6.192q.691 0 1.153.491q.463.492.463 1.201v2.25q0 .729-.463 1.21t-1.153.483H15.5v3.655q.5-.227.946-.521t.844-.661q.171-.14.375-.145q.204-.003.364.156q.165.166.14.367t-.196.36q-1.273 1.056-2.79 1.653Q13.668 21 12 21m0-1q.635 0 1.26-.11q.624-.111 1.24-.294v-4.058h-5v4.058q.616.183 1.24.293Q11.367 20 12 20"></svg:path>`,
})
export class MaterialSymbolsLightCribRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
