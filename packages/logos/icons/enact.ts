import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosEnactIcon],svg[logos-enact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#5582FF"><svg:path d="M127.948 248.133L50.31 197.409v-28.675l77.742 50.879l-.104-64.284l-77.638-45.238V83.28L128 126.913l.104.052l-.156-64.388L0 .052v219.51l128.052 92.648z"></svg:path><svg:path d="M128.052 312.21L256 219.665v-55.123l-128.052 83.591zm0-92.597l89.75-58.694V103l-89.854 52.329zm-.052-92.7l.104.052L256 55.072V0L127.948 62.577z" opacity=".8"></svg:path></svg:g>`,
})
export class LogosEnactIcon {
  readonly viewBox = input("0 0 256 313")
  readonly width = input("0.82em")
  readonly height = input("1em")
}
