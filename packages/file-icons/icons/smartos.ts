import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsSmartosIcon],svg[file-icons-smartos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M465 512H47c-25.957 0-47-21.043-47-47V47C0 21.043 21.043 0 47 0h418c25.957 0 47 21.043 47 47v418c0 25.957-21.043 47-47 47m-20.584-273.41H91.136V85.504h153.088v118.784h23.552V61.439H67.584v200.704h353.28V415.23H267.776v-99.84h-23.552v123.392h200.192z"></svg:path>`,
})
export class FileIconsSmartosIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
