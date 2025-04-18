import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilWatchIcon],svg[pepicons-pencil-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10 6a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-5 4a5 5 0 1 1 10 0a5 5 0 0 1-10 0"></svg:path><svg:path d="M10 8a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-1 0V8.5A.5.5 0 0 1 10 8"></svg:path><svg:path d="M12 10a.5.5 0 0 1-.5.5H10a.5.5 0 0 1 0-1h1.5a.5.5 0 0 1 .5.5M8 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M8.637 2.02a.5.5 0 0 1 .344.617l-1 3.5a.5.5 0 0 1-.962-.274l1-3.5a.5.5 0 0 1 .618-.344m0 15.961a.5.5 0 0 0 .344-.617l-1-3.5a.5.5 0 0 0-.962.274l1 3.5a.5.5 0 0 0 .618.344m2.726-.001a.5.5 0 0 1-.344-.617l1-3.5a.5.5 0 0 1 .962.274l-1 3.5a.5.5 0 0 1-.618.344m0-15.961a.5.5 0 0 0-.344.617l1 3.5a.5.5 0 0 0 .962-.274l-1-3.5a.5.5 0 0 0-.618-.344"></svg:path><svg:path d="M8 17.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"></svg:path></svg:g>`,
})
export class PepiconsPencilWatchIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
