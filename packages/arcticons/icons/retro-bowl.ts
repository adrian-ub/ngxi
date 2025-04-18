import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRetroBowlIcon],svg[arcticons-retro-bowl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.944 5.5v7.387H5.5v22.18h7.474V42.5h7.179V20.333H42.5v-7.345h-7.56V5.5zm12.799 37h-3.601M34.94 22.333v10.722"></svg:path><svg:path d="M20.153 27.693h7.579v7.446h-7.58m7.58-.085H42.5V42.5H27.732z"></svg:path></svg:g>`,
})
export class ArcticonsRetroBowlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
