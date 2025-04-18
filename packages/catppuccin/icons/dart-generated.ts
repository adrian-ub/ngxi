import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinDartGeneratedIcon],svg[catppuccin-dart-generated-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 14.5h4.5v-3h3V7L9.17 1.64c-.28-.29-.8-.47-1.17-.29L3.5 3.5L1.35 8c-.18.37 0 .88.3 1.17z"></svg:path><svg:path d="M3.5 11V3.5H11m-7.5 0l8 8"></svg:path></svg:g>`,
})
export class CatppuccinDartGeneratedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
