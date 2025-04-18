import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiIndexEditIcon],svg[oui-index-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2H2v11h4v1H1V1h12v5h-1zM5 5h5.999V4H5zM3 5V4h1v1zm2 3V7h6v1zM3 8V7h1v1zm2 3v-1h3v1zm-2 0v-1h1v1zm4.502 1.41L12.913 7L15 9.087l-5.41 5.41L7 15z"></svg:path>`,
})
export class OuiIndexEditIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
