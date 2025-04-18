import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiSceneDimmedIcon],svg[cbi-scene-dimmed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.004 19.34v-6.666a3.337 3.337 0 0 1 3.334 3.333a3.34 3.34 0 0 1-3.334 3.334m0-8.334a5 5 0 1 1-.001 10.001a5 5 0 0 1 0-10.001m0-2.007c-.55 0-1-.449-1-1s.45-1 1-1s1 .45 1 1c0 .551-.45 1-1 1M24 15.014c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-8 8c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-8-8c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m2-6c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m12 2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0 10c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-12 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class CbiSceneDimmedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
