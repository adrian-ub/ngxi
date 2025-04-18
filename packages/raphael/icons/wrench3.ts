import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelWrench3Icon],svg[raphael-wrench3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.84 6.775l-3.198 3.24l-2.872-.77L21 6.373l3.187-3.23a5.73 5.73 0 0 0-5.848 1.39a5.74 5.74 0 0 0-1.28 6.172l-9.64 9.64a4 4 0 0 0-.62-.062a3.93 3.93 0 0 0-3.934 3.933a3.932 3.932 0 1 0 7.865 0c0-.24-.03-.473-.07-.7l9.59-9.59a5.75 5.75 0 0 0 6.203-1.272a5.73 5.73 0 0 0 1.384-5.878zM6.8 25.145a.934.934 0 0 1-.936-.932a.932.932 0 1 1 .935.933z"></svg:path>`,
})
export class RaphaelWrench3Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
