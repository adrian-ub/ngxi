import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWrenchSettings20FilledIcon],svg[fluent-wrench-settings-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 2a4.5 4.5 0 0 0-4.417 5.36l-6.426 6.658a2.357 2.357 0 0 0 3.374 3.293L9.004 14.3a5.5 5.5 0 0 1 7.833-4.78a4.51 4.51 0 0 0 1.05-4.03a.5.5 0 0 0-.841-.242L14.5 7.793L12.208 5.5l2.545-2.545a.5.5 0 0 0-.242-.84A4.5 4.5 0 0 0 13.501 2m-2.865 11.92a2 2 0 0 0 1.43-2.478l-.155-.557q.382-.293.821-.497l.338.358a2 2 0 0 0 2.91.001l.324-.344q.448.212.835.519l-.126.422a2 2 0 0 0 1.456 2.519l.349.082a4.7 4.7 0 0 1 .01 1.017l-.46.118a2 2 0 0 0-1.431 2.478l.156.556q-.383.295-.822.498l-.338-.358a2 2 0 0 0-2.909-.002l-.325.345a4.3 4.3 0 0 1-.835-.518l.127-.423a2 2 0 0 0-1.456-2.52l-.35-.082a4.7 4.7 0 0 1-.01-1.016zm2.865.58a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class FluentWrenchSettings20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
