import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeCool2Icon],svg[icomoon-free-cool2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 13a5 5 0 0 1-2.118-.47l.518-.864a3.996 3.996 0 0 0 5.03-1.608l.858.515A5 5 0 0 1 8 13m5-7c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1H7c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V4.5c0-.275.225-.5.5-.5h3c.275 0 .5.225.5.5V5h2v-.5c0-.275.225-.5.5-.5h3c.275 0 .5.225.5.5z"></svg:path>`,
})
export class IcomoonFreeCool2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
