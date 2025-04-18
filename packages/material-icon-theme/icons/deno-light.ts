import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDenoLightIcon],svg[material-icon-theme-deno-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#455a64" d="M3.07 10.688C4.02-1.34 24.46-.735 25.713 11.893c1.027 3.74 2.21 8.244 3.222 11.998A18.98 18.98 0 0 1 17.339 30c-.407-2.79-.839-5.602-1.41-8.364a27 27 0 0 0-.505-2.123c-.103-.536-.522-1.043-.173-1.56c-6.665.529-12.374-2.428-12.18-7.267Zm14.347-4.101c-1.808-1.861-4.69 1.02-2.828 2.828c1.808 1.86 4.69-1.021 2.828-2.828"></svg:path>`,
})
export class MaterialIconThemeDenoLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
