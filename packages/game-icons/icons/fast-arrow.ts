import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsFastArrowIcon],svg[game-icons-fast-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.91 20.002v32.29l357.793 338.9L20.91 101.407v58.942l355.942 250.224l-86.89-17.527l26.913 30.947l-70.502 3.008l245.633 64.603l-65.502-249.054l-15.352 92.36l-27.3-31.46l16.683 60.464L161.26 20.002h-22.37l142.276 208.935L109.496 42.17l98.975 138.547L45.194 20.002zm433 92.186l-32.234 38.482l55.19 208.21l15.286-217.794l-38.242-28.9zm-231.88 327.89l-24.975 23.47l21.674 27.62l149.225-12.78l-145.926-38.31z"></svg:path>`,
})
export class GameIconsFastArrowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
