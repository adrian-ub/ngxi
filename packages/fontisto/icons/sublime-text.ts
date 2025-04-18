import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoSublimeTextIcon],svg[fontisto-sublime-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.003 23.617V17.93a.72.72 0 0 1 .457-.654l.005-.002l7.453-2.361l-7.454-2.366a.7.7 0 0 1-.398-.377l-.002-.005a.43.43 0 0 1-.061-.222v-.014v.001v-5.737q.001-.126.064-.227l-.001.002a.7.7 0 0 1 .395-.379l.005-.002L18.014.023a.343.343 0 0 1 .461.365V.386v5.686a.72.72 0 0 1-.457.654l-.005.002l-7.375 2.338l7.378 2.339a.72.72 0 0 1 .462.656v5.691a.5.5 0 0 1-.011.106l.001-.003a.73.73 0 0 1-.45.558l-.005.002L.464 23.979a.4.4 0 0 1-.128.022a.345.345 0 0 1-.332-.387v.002z"></svg:path>`,
})
export class FontistoSublimeTextIcon {
  readonly viewBox = input("0 0 18 24")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
