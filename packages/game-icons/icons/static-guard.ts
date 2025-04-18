import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsStaticGuardIcon],svg[game-icons-static-guard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m190.39 18.406l13.176 64.625h41.957l-.002 18.69h-38.145l7.635 37.438h82.63l7.45-37.44h-40.88V83.032h44.597l12.855-64.61l-131.273-.014zM331.8 63.238l-18.823 94.608h-113.23l-18.99-93.127L38.98 114.395l148.973 247.342l-60.967-203.168l17.9-5.37l39.247 130.784l72.35 10.62l71.53-10.696l39.094-130.664l17.905 5.358l-60.018 200.587L473.06 114.323zm-9.708 240.45l-65.582 9.81l-66.447-9.754l56.59 188.578V339.475h18.69v152.847h.31l56.44-188.633z"></svg:path>`,
})
export class GameIconsStaticGuardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
