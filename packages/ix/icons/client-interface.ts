import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixClientInterfaceIcon],svg[ix-client-interface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M277.333 64v384H106.667c-22.493 0-40.921-17.405-42.55-39.482L64 405.333V106.667c0-22.493 17.405-40.921 39.482-42.55l3.185-.117zm-42.666 42.615h-128v298.666l128 .052zm127.052 192c19.881 0 36.586 13.597 41.322 31.999h66.292v42.719l-66.297-.03c-4.744 18.392-21.444 31.978-41.317 31.978h-63.052V298.615zm0-192c19.881 0 36.586 13.597 41.322 31.999h66.292v42.689h-66.297c-4.744 18.392-21.444 31.978-41.317 31.978h-63.052V106.667z"></svg:path>`,
})
export class IxClientInterfaceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
