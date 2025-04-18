import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHandRightIcon],svg[icon-park-outline-hand-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M10.026 40.974v-22h-6v22z"></svg:path><svg:path d="M10.026 18.974Q20.71 9.194 22.41 7.752c1.7-1.443 3.62-.837 3.62 2.775s-5.285 5.695-5.285 8.447q-.005.024 20.277.003a3 3 0 0 1 3.004 2.998v.003a3.004 3.004 0 0 1-3.004 3.004h-8.01q-1.812 11.959-2 13.004c-.188 1.044-1.185 2.988-4.054 2.988H10.026z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkOutlineHandRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
