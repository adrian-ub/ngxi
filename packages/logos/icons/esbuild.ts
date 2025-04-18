import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosEsbuildIcon],svg[logos-esbuild-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="128" cy="128" r="128" fill="#FFCF00"></svg:circle><svg:path fill="#191919" d="M69.285 58.715L138.571 128l-69.286 69.285l-16.97-16.97L104.629 128L52.315 75.685zm76.8 0L215.371 128l-69.286 69.285l-16.97-16.97L181.429 128l-52.314-52.315z"></svg:path>`,
})
export class LogosEsbuildIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
