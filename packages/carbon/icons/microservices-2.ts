import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMicroservices2Icon],svg[carbon-microservices-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22v-6h-6v-6H2v20h20v-8zm-2-4v4h-4v-4zM4 12h4v4H4zm4 6v4H4v-4zM4 28v-4h4v4zm10 0h-4v-4h4zm6 0h-4v-4h4zm9.6-14.4L27 16.2V10h3V2h-8v8h3v6.2l-2.6-2.6L21 15l5 5l5-5zM24 4h4v4h-4z"></svg:path><svg:path fill="none" d="M0 0h32v32H0z"></svg:path>`,
})
export class CarbonMicroservices2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
