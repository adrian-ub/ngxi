import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoBackgroundEffectHorizontal20RegularIcon],svg[fluent-video-background-effect-horizontal-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a2 2 0 0 0-1.732 1h15.464A2 2 0 0 0 16 4zM2 7h4.837c-.148.31-.251.647-.302 1H2zm6 0a2.5 2.5 0 0 0-.5 1.5a2.5 2.5 0 0 0 1 2c.418.314.937.5 1.5.5s1.082-.186 1.5-.5a2.49 2.49 0 0 0 .95-2.5A2.496 2.496 0 0 0 10 6c-.818 0-1.544.393-2 1m2 0a1.5 1.5 0 1 1 0 3.001A1.5 1.5 0 0 1 10 7M2 9.5h4.645c.107.361.272.698.482 1H2zM6.085 13A1.5 1.5 0 0 1 7.5 12h5a1.5 1.5 0 0 1 1.5 1.5V16h-1v-2.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V16H6v-2.5q.001-.264.085-.5m8.415-1c.219.29.375.63.45 1H18v-1zm.5 3v1h1a2 2 0 0 0 1.732-1zM5 16v-1H2.268A2 2 0 0 0 4 16zm.5-4c-.219.29-.375.63-.45 1H2v-1zm7.855-2.5a3.5 3.5 0 0 1-.482 1H18v-1zM18 8h-4.535a3.5 3.5 0 0 0-.302-1H18z"></svg:path>`,
})
export class FluentVideoBackgroundEffectHorizontal20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
