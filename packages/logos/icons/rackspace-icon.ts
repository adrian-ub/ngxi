import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosRackspaceIconIcon],svg[logos-rackspace-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EA0000" d="M0 0h256v256H0z"></svg:path><svg:path fill="#FFF" d="m128.453 88.305l6.165-32.447h-38.09L68.201 204.8h43.255l11.68-61.41c6.887-36.213 27.663-50.704 57.23-46.23l8.446-44.426c-25.678-2.366-49.99 11.961-60.36 35.571z"></svg:path>`,
})
export class LogosRackspaceIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
