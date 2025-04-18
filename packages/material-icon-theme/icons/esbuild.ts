import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeEsbuildIcon],svg[material-icon-theme-esbuild-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffca28" d="M12 2.042A9.957 9.957 0 0 0 2.043 12A9.957 9.957 0 0 0 12 21.957A9.957 9.957 0 0 0 21.957 12A9.957 9.957 0 0 0 12 2.043zM7.617 6.425L13.192 12l-5.575 5.575l-1.69-1.69L9.814 12L5.926 8.115zm5.975 0L19.166 12l-5.574 5.575l-1.69-1.69L15.787 12l-3.885-3.885z"></svg:path>`,
})
export class MaterialIconThemeEsbuildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
