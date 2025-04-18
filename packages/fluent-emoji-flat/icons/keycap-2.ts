import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatKeycap2Icon],svg[fluent-emoji-flat-keycap-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M16.3 11.252c-.31.015-.8.168-1.35.823a1.75 1.75 0 0 1-2.678-2.252c1.077-1.282 2.43-1.996 3.853-2.067c1.4-.07 2.68.493 3.593 1.404c1.905 1.9 2.141 5.144-.302 7.768c-.71.763-1.574 1.665-2.445 2.576c-.4.418-.801.837-1.19 1.246h4.099a1.75 1.75 0 1 1 0 3.5h-7.02c-1.88 0-3.005-2.244-1.66-3.728c.852-.939 2.117-2.261 3.322-3.522c.866-.906 1.702-1.78 2.333-2.457c.666-.716.84-1.343.843-1.784c.001-.457-.18-.85-.452-1.121a1.25 1.25 0 0 0-.946-.386"></svg:path></svg:g>`,
})
export class FluentEmojiFlatKeycap2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
