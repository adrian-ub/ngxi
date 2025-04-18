import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMinimizeFill16Icon],svg[garden-minimize-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 .71V4c0 .55.45 1 1 1h3.29c.45 0 .67-.54.35-.85L11.85.36a.495.495 0 0 0-.85.35M5 15.29V12c0-.55-.45-1-1-1H.71c-.45 0-.67.54-.35.85l3.79 3.79c.31.32.85.1.85-.35M5 .71V4c0 .55-.45 1-1 1H.71a.5.5 0 0 1-.36-.85L4.14.36c.32-.32.86-.1.86.35m6 14.58V12c0-.55.45-1 1-1h3.29c.45 0 .67.54.35.85l-3.79 3.79c-.31.32-.85.1-.85-.35"></svg:path>`,
})
export class GardenMinimizeFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
