import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPinFill16Icon],svg[garden-pin-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.933 15.62a.542.542 0 0 1-.393-.927l3.137-3.138L.15 8.028a.512.512 0 0 1 .169-.836l7.62-3.113l-.837-.837a.54.54 0 0 1-.14-.524L7.58.403a.543.543 0 0 1 .91-.244l7.352 7.352a.543.543 0 0 1-.244.909l-2.315.619a.54.54 0 0 1-.524-.141l-.837-.836L9.1 14.968l-.006.013l-.286.7a.512.512 0 0 1-.836.169l-3.527-3.527l-3.138 3.137a.54.54 0 0 1-.374.16"></svg:path>`,
})
export class GardenPinFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
