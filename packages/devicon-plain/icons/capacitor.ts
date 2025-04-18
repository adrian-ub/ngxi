import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainCapacitorIcon],svg[devicon-plain-capacitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108.215 0L77.512 30.691L46.96.156L27.184 19.957l80.82 80.926l19.777-19.805l-30.496-30.586L128 19.738ZM19.93 27.059L.156 46.859l30.496 30.59L0 108.191l19.715 19.813L50.43 97.246l30.547 30.535l19.777-19.8Zm0 0"></svg:path>`,
})
export class DeviconPlainCapacitorIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
