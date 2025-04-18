import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTurnAroundIcon],svg[icon-park-outline-turn-around-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10m3 6h-6c-.929 0-1.393 0-1.784.038a8 8 0 0 0-7.177 7.178C12 27.607 12 28.07 12 29h24c0-.929 0-1.393-.038-1.784a8 8 0 0 0-7.178-7.178C28.393 20 27.93 20 27 20"></svg:path><svg:path d="M41 26.784c1.902 1.224 3 2.669 3 4.216c0 4.418-8.954 8-20 8S4 35.418 4 31c0-1.547 1.098-2.992 3-4.216"></svg:path><svg:path d="m19 34l5 5l-5 5"></svg:path></svg:g>`,
})
export class IconParkOutlineTurnAroundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
