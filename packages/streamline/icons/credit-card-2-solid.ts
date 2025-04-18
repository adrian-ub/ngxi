import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCreditCard2SolidIcon],svg[streamline-credit-card-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M.367.378a1 1 0 0 1 .705-.295h11.856a.993.993 0 0 1 .994 1v3a1 1 0 0 1-.29.705a1 1 0 0 1-.704.295H12V3.5a2.25 2.25 0 0 0-2.25-2.25h-5.5A2.25 2.25 0 0 0 2 3.5v1.583h-.928a1 1 0 0 1-.705-.295a1 1 0 0 1-.289-.705v-3a1 1 0 0 1 .29-.705Z"></svg:path><svg:path d="M3.25 3.5a1 1 0 0 1 1-1h5.5a1 1 0 0 1 1 1v9.375a1 1 0 0 1-1 1h-5.5a1 1 0 0 1-1-1zm3 1.333a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m-1 3.354a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M7 10.848a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"></svg:path></svg:g>`,
})
export class StreamlineCreditCard2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
