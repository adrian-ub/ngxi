import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFireExtinguisherIcon],svg[openmoji-fire-extinguisher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M44.75 28.12V64H26.47V28.12a8.98 8.98 0 0 1 5.93-8.707a6 6 0 0 1 .65-.176h.01a7.5 7.5 0 0 1 1.66-.187h1.78c4.56 0 8.25 4.056 8.25 9.07"></svg:path><svg:path fill="#ea5a47" d="M38.33 26.723V64H26.47V28.12a8.98 8.98 0 0 1 5.93-8.707a6 6 0 0 1 .65-.176h.01a7.5 7.5 0 0 1 1.66-.187h.15a9.84 9.84 0 0 1 3.46 7.673M33.518 9.977h4.186v8.704h-4.186z"></svg:path><svg:path fill="#d0cfce" d="M44.75 12.717v3.187h-7.046v-3.187zm-11.23 0h-4.64a4.51 4.51 0 0 0-3.746 1.997l-5.504 8.2a1.594 1.594 0 0 0 .675 2.34a1.65 1.65 0 0 0 2.023-.641l4.475-6.704a4.51 4.51 0 0 1 3.751-2.006h2.966Zm11.231-.305v3.833l12.093 2.619V9.793z"></svg:path><svg:path fill="#fff" d="M30.913 29.284h9.395v5.674h-9.395z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M35.611 19.052a9.14 9.14 0 0 1 9.14 9.14v34.913a.89.89 0 0 1-.89.891h-16.5a.89.89 0 0 1-.89-.89V28.191a9.14 9.14 0 0 1 9.139-9.14m-2.092-9.074h4.186v8.704h-4.186zm11.232 2.74v3.187h-7.046v-3.187z"></svg:path><svg:path d="M33.52 12.717h-4.64a4.51 4.51 0 0 0-3.746 1.997l-5.504 8.2a1.594 1.594 0 0 0 .675 2.34a1.65 1.65 0 0 0 2.023-.641l4.475-6.704a4.51 4.51 0 0 1 3.751-2.006h2.966Zm11.231-.305v3.833l12.093 2.619V9.793zM30.913 29.284h9.395v5.674h-9.395z"></svg:path></svg:g>`,
})
export class OpenmojiFireExtinguisherIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
